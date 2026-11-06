/**
 * Applies site-wide language from localStorage.
 * Requires translations.js loaded first.
 */
(function () {
  const STORAGE_KEY = 'site-lang';
  const DEFAULT_LANG = 'en';

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'hi' ? 'hi' : DEFAULT_LANG;
  }

  function t(lang, key) {
    return TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const value = t(lang, key);
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      const value = t(lang, key);
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = t(lang, key);
      if (value != null) el.setAttribute('placeholder', value);
    });

    const titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey) {
      const title = t(lang, titleKey);
      if (title) document.title = title;
    }

    const select = document.getElementById('langSelect');
    if (select) select.value = lang;
  }

  function initLangSwitcher() {
    const select = document.getElementById('langSelect');
    if (!select) return;
    select.addEventListener('change', function () {
      applyLanguage(select.value);
    });
  }

  window.SiteI18n = { applyLanguage: applyLanguage, getLang: getLang };

  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(getLang());
    initLangSwitcher();
  });
})();
