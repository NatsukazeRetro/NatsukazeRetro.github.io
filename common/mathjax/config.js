MathJax.Hub.Config({
    tex2jax: {
	inlineMath: [['$','$'], ['\\(','\\)']],
	processEscapes: true
    },
    TeX: {
	equationNumbers: { autoNumber: "AMS" },
	Macros: {
	    C: '{\\mathbb C}',
	    R: '{\\mathbb R}',
	    Q: '{\\mathbb Q}',
	    Z: '{\\mathbb Z}',
	}
    },
    CommonHTML: {
	scale: 110,
	mtextFontInherit: true
    }
});

MathJax.Ajax.loadComplete("https://natsukazeretro.githubio/common/mathjax/config.js");
