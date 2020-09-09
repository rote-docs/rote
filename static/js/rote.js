// Load Mermaid to render charts
mermaid.initialize({startOnLoad:true});

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

tocbot.init({
  tocSelector: '#toc',
  contentSelector: '#main-content',
  headingSelector: 'h1, h2, h3',
  hasInnerContainers: true,
  listClass: 'uk-nav',
  extraListClasses: 'uk-nav-default',
  orderedList: false
});