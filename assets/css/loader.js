(function () {
  var MIN_LOADER_MS = 2000;
  var startTime = Date.now();
  var revealed = false;
  var pageLoaded = false;

  function revealPage() {
    if (revealed) return;
    revealed = true;

    var root = document.documentElement;
    root.classList.remove('page-loading');
    root.classList.add('page-ready');

    var loader = document.getElementById('page-loader');
    if (!loader) return;

    loader.classList.add('loader-hidden');
    window.setTimeout(function () {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 600);
  }

  function tryReveal() {
    if (!pageLoaded) return;
    var wait = MIN_LOADER_MS - (Date.now() - startTime);
    if (wait > 0) {
      window.setTimeout(revealPage, wait);
    } else {
      revealPage();
    }
  }

  function onPageLoad() {
    pageLoaded = true;
    tryReveal();
  }

  if (document.readyState === 'complete') {
    onPageLoad();
  } else {
    window.addEventListener('load', onPageLoad);
    window.setTimeout(function () {
      pageLoaded = true;
      tryReveal();
    }, 8000);
  }
})();
