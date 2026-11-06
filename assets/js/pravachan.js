(function () {
  if (window.location.protocol === 'file:') {
    const tabContent = document.querySelector('.tab-content');

    if (tabContent) {
      const notice = document.createElement('div');
      notice.className = 'alert alert-warning youtube-file-warning';
      notice.setAttribute('role', 'status');
      notice.textContent =
        'YouTube embeds need an HTTP or HTTPS page. This page is open as a local file. ' +
        'Start a local web server to play videos here, or use the links below to watch on YouTube.';
      tabContent.insertAdjacentElement('beforebegin', notice);
    }

    document.querySelectorAll('.video-thumb iframe, .short-thumb iframe').forEach(function (iframe) {
      const videoId = new URL(iframe.src).pathname.split('/').pop();
      const link = document.createElement('a');
      link.className = 'youtube-file-fallback';
      link.href = 'https://www.youtube.com/watch?v=' + encodeURIComponent(videoId);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Open ' + iframe.title + ' on YouTube';
      iframe.replaceWith(link);
    });
  }

  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab');

  if (tab === 'shorts') {
    const shortsTab = document.getElementById('shorts-tab');
    if (shortsTab) new bootstrap.Tab(shortsTab).show();
  }
})();
