setTimeout(() => {
  const hate = document.getElementById('hate');
  if (hate) {
    hate.style.opacity = Math.random() > 0.9 ? '1' : '0';
  }
  const main = document.body.querySelector('main');
  if (main) {
    main.style.opacity = '1';
  }
}, 100);

setInterval(() => {
  const title = document.getElementById('title');
  if (title) {
    title.style.fontSize = (window.innerHeight + window.innerWidth) / 30 + 'px';
  }
  const subt = document.getElementById('subt');
  if (subt) {
    subt.style.fontSize = (window.innerHeight + window.innerWidth) / 50 + 'px';
  }
  const langs = document.getElementById('langs');
  if (langs) {
    langs.style.fontSize = (window.innerHeight + window.innerWidth) / 70 + 'px';
  }
  const icons = document.querySelectorAll('div.icons>a');
  for (el of icons) {
    el.style.marginRight =
      (window.innerHeight + window.innerWidth) / 30 / 3 + 'px';
  }
}, 100);
