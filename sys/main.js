Reveal.initialize({
    history: true,
    hash: true,
    transition: 'linear',

    math: {
        config: 'TeX-AMS_HTML-full',
        TeX: {
            Macros: {
                R: '\\mathbb{R}',
                set: ['\\left\\{#1 \\; ; \\; #2\\right\\}', 2]
            }
        }
    },

    plugins: [RevealMath, RevealMarkdown, RevealHighlight, RevealSearch, RevealZoom]
});