const PARSED = [
    {
        query: '<P>',
        elems: [],
        foundElems: 0,
        original: "<P>",
        returned: [],
        userQuery: "<p>",
        error: "Found generics without a path",
    },
    {
        query: '-> <P>',
        elems: [],
        foundElems: 0,
        original: "-> <P>",
        returned: [],
        userQuery: "-> <p>",
        error: "Found generics without a path",
    },
    {
        query: '-> *',
        elems: [],
        foundElems: 0,
        original: "-> *",
        returned: [],
        userQuery: "-> *",
        error: "Unexpected `*`",
    },
    {
        query: 'a<"P">',
        elems: [],
        foundElems: 0,
        original: "a<\"P\">",
        returned: [],
        userQuery: "a<\"p\">",
        error: "Unexpected `\"` in generics",
    },
    {
        query: '"P" "P"',
        elems: [],
        foundElems: 0,
        original: "\"P\" \"P\"",
        returned: [],
        userQuery: "\"p\" \"p\"",
        error: "Cannot have more than one element if you use quotes",
    },
    {
        query: '"P","P"',
        elems: [],
        foundElems: 0,
        original: "\"P\",\"P\"",
        returned: [],
        userQuery: "\"p\",\"p\"",
        error: "Cannot have more than one literal search element",
    },
    {
        query: "P,\"P\"",
        elems: [],
        foundElems: 0,
        original: "P,\"P\"",
        returned: [],
        userQuery: "p,\"p\"",
        error: "Cannot use literal search when there is more than one element",
    },
    {
        query: '"p" p',
        elems: [],
        foundElems: 0,
        original: "\"p\" p",
        returned: [],
        userQuery: "\"p\" p",
        error: "Cannot have more than one element if you use quotes",
    },
    {
        query: '"p",p',
        elems: [],
        foundElems: 0,
        original: "\"p\",p",
        returned: [],
        userQuery: "\"p\",p",
        error: "Cannot have more than one element if you use quotes",
    },
    {
        query: '"const": p',
        elems: [],
        foundElems: 0,
        original: "\"const\": p",
        returned: [],
        userQuery: "\"const\": p",
        error: "Cannot use quotes on type filter",
    },
    {
        query: "a<:a>",
        elems: [],
        foundElems: 0,
        original: "a<:a>",
        returned: [],
        userQuery: "a<:a>",
        error: "Expected type filter before `:`",
    },
    {
        query: "a<::a>",
        elems: [],
        foundElems: 0,
        original: "a<::a>",
        returned: [],
        userQuery: "a<::a>",
        error: "Unexpected `::`: paths cannot start with `::`",
    },
    {
        query: "((a))",
        elems: [],
        foundElems: 0,
        original: "((a))",
        returned: [],
        userQuery: "((a))",
        error: "Unexpected `(`",
    },
    {
        query: "(p -> p",
        elems: [],
        foundElems: 0,
        original: "(p -> p",
        returned: [],
        userQuery: "(p -> p",
        error: "Unexpected `(`",
    },
    {
        query: "::a::b",
        elems: [],
        foundElems: 0,
        original: "::a::b",
        returned: [],
        userQuery: "::a::b",
        error: "Paths cannot start with `::`",
    },
    {
        query: " ::a::b",
        elems: [],
        foundElems: 0,
        original: "::a::b",
        returned: [],
        userQuery: "::a::b",
        error: "Paths cannot start with `::`",
    },
    {
        query: "a::::b",
        elems: [],
        foundElems: 0,
        original: "a::::b",
        returned: [],
        userQuery: "a::::b",
        error: "Unexpected `::::`",
    },
    {
        query: "a:: ::b",
        elems: [],
        foundElems: 0,
        original: "a:: ::b",
        returned: [],
        userQuery: "a:: ::b",
        error: "Unexpected `:: ::`",
    },
    {
        query: "a::\t::b",
        elems: [],
        foundElems: 0,
        original: "a:: ::b",
        returned: [],
        userQuery: "a:: ::b",
        error: "Unexpected `:: ::`",
    },
    {
        query: "a::b::",
        elems: [],
        foundElems: 0,
        original: "a::b::",
        returned: [],
        userQuery: "a::b::",
        error: "Paths cannot end with `::`",
    },
    {
        query: ":a",
        elems: [],
        foundElems: 0,
        original: ":a",
        returned: [],
        userQuery: ":a",
        error: "Expected type filter before `:`",
    },
    {
        query: "a,b:",
        elems: [],
        foundElems: 0,
        original: "a,b:",
        returned: [],
        userQuery: "a,b:",
        error: "Unexpected `:` (expected path after type filter `b:`)",
    },
    {
        query: "a (b:",
        elems: [],
        foundElems: 0,
        original: "a (b:",
        returned: [],
        userQuery: "a (b:",
        error: "Unexpected `(`",
    },
    {
        query: "_:",
        elems: [],
        foundElems: 0,
        original: "_:",
        returned: [],
        userQuery: "_:",
        error: "Unexpected `:` (expected path after type filter `_:`)",
    },
    {
        query: "_:a",
        elems: [],
        foundElems: 0,
        original: "_:a",
        returned: [],
        userQuery: "_:a",
        error: "Unknown type filter `_`",
    },
    {
        query: "a-bb",
        elems: [],
        foundElems: 0,
        original: "a-bb",
        returned: [],
        userQuery: "a-bb",
        error: "Unexpected `-` (did you mean `->`?)",
    },
    {
        query: "a>bb",
        elems: [],
        foundElems: 0,
        original: "a>bb",
        returned: [],
        userQuery: "a>bb",
        error: "Unexpected `>` (did you mean `->`?)",
    },
    {
        query: "ab'",
        elems: [],
        foundElems: 0,
        original: "ab'",
        returned: [],
        userQuery: "ab'",
        error: "Unexpected `'`",
    },
    {
        query: "a->",
        elems: [],
        foundElems: 0,
        original: "a->",
        returned: [],
        userQuery: "a->",
        error: "Expected at least one item after `->`",
    },
    {
        query: '"p" <a>',
        elems: [],
        foundElems: 0,
        original: '"p" <a>',
        returned: [],
        userQuery: '"p" <a>',
        error: "Cannot have more than one element if you use quotes",
    },
    {
        query: '"p",<a>',
        elems: [],
        foundElems: 0,
        original: '"p",<a>',
        returned: [],
        userQuery: '"p",<a>',
        error: "Found generics without a path",
    },
    {
        query: '"p" a<a>',
        elems: [],
        foundElems: 0,
        original: '"p" a<a>',
        returned: [],
        userQuery: '"p" a<a>',
        error: "Cannot have more than one element if you use quotes",
    },
    {
        query: '"p",a<a>',
        elems: [],
        foundElems: 0,
        original: '"p",a<a>',
        returned: [],
        userQuery: '"p",a<a>',
        error: "Cannot have more than one element if you use quotes",
    },
    {
        query: "a,<",
        elems: [],
        foundElems: 0,
        original: 'a,<',
        returned: [],
        userQuery: 'a,<',
        error: 'Found generics without a path',
    },
    {
        query: "aaaaa<>b",
        elems: [],
        foundElems: 0,
        original: 'aaaaa<>b',
        returned: [],
        userQuery: 'aaaaa<>b',
        error: 'Expected `,`, `:` or `->` after `>`, found `b`',
    },
    {
        query: "fn:aaaaa<>b",
        elems: [],
        foundElems: 0,
        original: 'fn:aaaaa<>b',
        returned: [],
        userQuery: 'fn:aaaaa<>b',
        error: 'Expected `,`, `:` or `->` after `>`, found `b`',
    },
    {
        query: "->a<>b",
        elems: [],
        foundElems: 0,
        original: '->a<>b',
        returned: [],
        userQuery: '->a<>b',
        error: 'Expected `,` or `=` after `>`, found `b`',
    },
    {
        query: "a<->",
        elems: [],
        foundElems: 0,
        original: 'a<->',
        returned: [],
        userQuery: 'a<->',
        error: 'Unexpected `-` after `<`',
    },
    {
        query: "a<a>:",
        elems: [],
        foundElems: 0,
        original: "a<a>:",
        returned: [],
        userQuery: "a<a>:",
        error: 'Unexpected `<` in type filter (before `:`)',
    },
    {
        query: "a<>:",
        elems: [],
        foundElems: 0,
        original: "a<>:",
        returned: [],
        userQuery: "a<>:",
        error: 'Unexpected `<` in type filter (before `:`)',
    },
    {
        query: "a,:",
        elems: [],
        foundElems: 0,
        original: "a,:",
        returned: [],
        userQuery: "a,:",
        error: 'Unexpected `,` in type filter (before `:`)',
    },
    {
        query: "  a<>  :",
        elems: [],
        foundElems: 0,
        original: "a<>  :",
        returned: [],
        userQuery: "a<>  :",
        error: 'Unexpected `<` in type filter (before `:`)',
    },
    {
        query: "mod : :",
        elems: [],
        foundElems: 0,
        original: "mod : :",
        returned: [],
        userQuery: "mod : :",
        error: 'Unexpected `:` (expected path after type filter `mod:`)',
    },
    {
        query: "mod: :",
        elems: [],
        foundElems: 0,
        original: "mod: :",
        returned: [],
        userQuery: "mod: :",
        error: 'Unexpected `:` (expected path after type filter `mod:`)',
    },
    {
        query: "a!a",
        elems: [],
        foundElems: 0,
        original: "a!a",
        returned: [],
        userQuery: "a!a",
        error: 'Unexpected `!`: it can only be at the end of an ident',
    },
    {
        query: "a!!",
        elems: [],
        foundElems: 0,
        original: "a!!",
        returned: [],
        userQuery: "a!!",
        error: 'Cannot have more than one `!` in an ident',
    },
    {
        query: "mod:a!",
        elems: [],
        foundElems: 0,
        original: "mod:a!",
        returned: [],
        userQuery: "mod:a!",
        error: 'Invalid search type: macro `!` and `mod` both specified',
    },
    {
        query: "mod:!",
        elems: [],
        foundElems: 0,
        original: "mod:!",
        returned: [],
        userQuery: "mod:!",
        error: 'Invalid search type: primitive never type `!` and `mod` both specified',
    },
    {
        query: "a!::a",
        elems: [],
        foundElems: 0,
        original: "a!::a",
        returned: [],
        userQuery: "a!::a",
        error: 'Cannot have associated items in macros',
    },
    {
        query: "a<",
        elems: [],
        foundElems: 0,
        original: "a<",
        returned: [],
        userQuery: "a<",
        error: "Unclosed `<`",
    },
    {
        query: "p<x> , y",
        elems: [
            {
                name: "p",
                fullPath: ["p"],
                pathWithoutLast: [],
                pathLast: "p",
                generics: [
                    {
                        name: "x",
                        fullPath: ["x"],
                        pathWithoutLast: [],
                        pathLast: "x",
                        generics: [],
                        typeFilter: -1,
                    },
                ],
                typeFilter: -1,
            },
            {
                name: "y",
                fullPath: ["y"],
                pathWithoutLast: [],
                pathLast: "y",
                generics: [],
                typeFilter: -1,
            },
        ],
        foundElems: 2,
        original: "p<x> , y",
        returned: [],
        userQuery: "p<x> , y",
        error: null,
    },
    {
        query: "p<x , y>",
        elems: [
            {
                name: "p",
                fullPath: ["p"],
                pathWithoutLast: [],
                pathLast: "p",
                generics: [
                    {
                        name: "x",
                        fullPath: ["x"],
                        pathWithoutLast: [],
                        pathLast: "x",
                        generics: [],
                        typeFilter: -1,
                    },
                    {
                        name: "y",
                        fullPath: ["y"],
                        pathWithoutLast: [],
                        pathLast: "y",
                        generics: [],
                        typeFilter: -1,
                    },
                ],
                typeFilter: -1,
            },
        ],
        foundElems: 1,
        original: "p<x , y>",
        returned: [],
        userQuery: "p<x , y>",
        error: null,
    },
    {
        query: "p ,x , y",
        elems: [
            {
                name: "p",
                fullPath: ["p"],
                pathWithoutLast: [],
                pathLast: "p",
                generics: [],
                typeFilter: -1,
            },
            {
                name: "x",
                fullPath: ["x"],
                pathWithoutLast: [],
                pathLast: "x",
                generics: [],
                typeFilter: -1,
            },
            {
                name: "y",
                fullPath: ["y"],
                pathWithoutLast: [],
                pathLast: "y",
                generics: [],
                typeFilter: -1,
            },
        ],
        foundElems: 3,
        original: "p ,x , y",
        returned: [],
        userQuery: "p ,x , y",
        error: null,
    },
];
