import * as MathJax from 'mathjax-node';

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
