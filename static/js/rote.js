// Load Mermaid to render charts
mermaid.initialize({
  startOnLoad:true,
  theme: useDarkTheme ? 'dark' : 'light'
});

// MathJax Configuration
MathJax = {
  svg: {
    displayAlign: 'center'
  }
};

// Load MathJax
(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();