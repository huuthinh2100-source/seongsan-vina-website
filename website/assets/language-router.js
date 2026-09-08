(() => {
  const languages = ['vi', 'en', 'ko', 'zh'];
  function route(language) {
    const url = new URL(location.href);
    const page = url.pathname.replace(/^\/(en|ko|zh)(?=\/|$)/, '')
      .replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '');
    url.pathname = (language === 'vi' ? '' : '/' + language) + page || '/';
    url.searchParams.delete('lang');
    return url.pathname + url.search + url.hash;
  }
  const requested = new URL(location.href).searchParams.get('lang');
  if (languages.includes(requested)) {
    location.replace(route(requested));
    return;
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('#langSwitch button');
    if (!button || !languages.includes(button.dataset.lang)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    location.assign(route(button.dataset.lang));
  }, true);
})();
