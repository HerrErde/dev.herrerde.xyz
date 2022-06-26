setTimeout(() => {
  document.getElementById('hate').style.opacity =
    Math.random() > 0.9 ? '.1' : '0';
  document.body.querySelector('main').style.opacity = '1';
}, 100);
setInterval(() => {
  document.getElementById('title').style.fontSize =
    (window.innerHeight + window.innerWidth) / 30 + 'px';
  document.getElementById('subt').style.fontSize =
    (window.innerHeight + window.innerWidth) / 50 + 'px';
  document.getElementById('langs').style.fontSize =
    (window.innerHeight + window.innerWidth) / 70 + 'px';
  for (el of document.querySelectorAll('div.icons>a')) {
    el.style.marginRight =
      (window.innerHeight + window.innerWidth) / 30 / 3 + 'px';
  }
}, 100);
