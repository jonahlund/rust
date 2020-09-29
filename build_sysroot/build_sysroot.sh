#!/bin/bash

# Requires the CHANNEL env var to be set to `debug` or `release.`

set -e
cd $(dirname "$0")

pushd ../ >/dev/null
source ./scripts/config.sh
popd >/dev/null

# Cleanup for previous run
#     v Clean target dir except for build scripts and incremental cache
rm -r target/*/{debug,release}/{build,deps,examples,libsysroot*,native} 2>/dev/null || true
rm -r sysroot/ 2>/dev/null || true

# Use rustc with cg_clif as hotpluggable backend instead of the custom cg_clif driver so that
# build scripts are still compiled using cg_llvm.
export RUSTC=rustc
export RUSTFLAGS=$RUSTFLAGS" -Ztrim-diagnostic-paths=no -Zcodegen-backend=$(pwd)/../target/"$CHANNEL"/librustc_codegen_cranelift."$dylib_ext" --sysroot $(pwd)/sysroot"

# Build libs
export RUSTFLAGS="$RUSTFLAGS -Zforce-unstable-if-unmarked -Cpanic=abort"
if [[ "$1" == "--release" ]]; then
    sysroot_channel='release'
    # FIXME Enable incremental again once rust-lang/rust#74946 is fixed
    CARGO_INCREMENTAL=0 RUSTFLAGS="$RUSTFLAGS -Zmir-opt-level=2" cargo build --target $TARGET_TRIPLE --release
else
    sysroot_channel='debug'
    cargo build --target $TARGET_TRIPLE
fi

# Copy files to sysroot
mkdir -p sysroot/lib/rustlib/$TARGET_TRIPLE/lib/
cp -r target/$TARGET_TRIPLE/$sysroot_channel/deps/* sysroot/lib/rustlib/$TARGET_TRIPLE/lib/
