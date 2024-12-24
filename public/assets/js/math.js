import * as MathJax from 'mathjax/es5/tex-mml-chtml.js';

MathJax.config({
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
  },
  startup: {
    ready: () => {
      console.log('MathJax está pronto!');
    },
  },
});

MathJax.startup.promise.then(() => {
  MathJax.typeset();
});
