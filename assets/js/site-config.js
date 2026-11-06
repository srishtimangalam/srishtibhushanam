/**
 * Site-wide configuration. Edit values here to update them on every page.
 * Must be loaded before translations.js.
 */
const SITE_CONFIG = {
  address: {
    en: 'Shree 1008 Shantinath Digambar Jain Mandir, Bhiwandi, Maharashtra 421308.',
    hi: 'श्री 1008 शांतिनाथ दिगंबर जैन मंदिर, भिवंडी, महाराष्ट्र 421308।'
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.3925644493193!2d73.05866!3d19.305673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd1425d8ba03%3A0x35c38a28b7ebed1!2sShree%201008%20Shantinath%20Digambar%20Jain%20Mandir%2C%20Bhiwandi!5e1!3m2!1sen!2sin!4v1793904222017!5m2!1sen!2sin',
  phone: '+91 95846 51008',
  whatsapp: '+91 95846 51008',
  email: 'info@jainfaith.com',
  supportEmail: 'support@jainfaith.com',
  youtube: 'https://www.youtube.com/@Srishti_mangalam',
  instagram: 'https://www.instagram.com/aadi_srashti_prabhavna/'
};

(function () {
  function digits(value) {
    return String(value).replace(/[^\d+]/g, '');
  }

  const binders = {
    'data-config-text': function (el, v) { el.textContent = v; },
    'data-config-src': function (el, v) { el.setAttribute('src', v); },
    'data-config-href': function (el, v) { el.setAttribute('href', v); },
    'data-config-tel': function (el, v) { el.setAttribute('href', 'tel:' + digits(v)); },
    'data-config-mailto': function (el, v) { el.setAttribute('href', 'mailto:' + v); },
    'data-config-wa': function (el, v) { el.setAttribute('href', 'https://wa.me/' + digits(v).replace('+', '')); }
  };

  function applyConfig() {
    Object.keys(binders).forEach(function (attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        const value = SITE_CONFIG[el.getAttribute(attr)];
        if (value != null && typeof value !== 'object') binders[attr](el, value);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
  } else {
    applyConfig();
  }
})();
