/**
 * Events shown on the Events page and the "Latest Events" section of the home page.
 * Set featured: true to show an event as the large card. Dates must be "DD Mon YYYY".
 * Must be loaded after translations.js and before i18n.js.
 */
const EVENTS = [
  {
    featured: true,
    image: 'assets/images/slide_img/slide2.jpg',
    alt: 'Guru Bhakti - Shri Sristhi Bhushan Mataji',
    date: { en: '29 Oct 2025', hi: '29 अक्टूबर 2025' },
    category: { en: 'By Patricia Robinson | News', hi: 'पैट्रिशिया रॉबिन्सन द्वारा | समाचार' },
    title: { en: 'Jainism: Way of Life, Beliefs, and Practices', hi: 'जैन धर्म का जीवन मार्ग, विश्वास और प्रथाएं' },
    text: {
      en: 'Jainism is more than a religion — it is a way of life. Discover the fundamental beliefs, sacred practices, and daily rituals that guide Jains worldwide in their spiritual journey.',
      hi: 'जैन धर्म एक धर्म से अधिक है — यह एक जीवन शैली है। मूलभूत विश्वासों, पवित्र प्रथाओं और दैनिक अनुष्ठानों की खोज करें।'
    }
  },
  {
    image: 'https://picsum.photos/seed/event2/600/400',
    date: { en: '23 Oct 2025', hi: '29 अक्टूबर 2025' },
    category: { en: 'By Patricia Robinson | News', hi: 'पैट्रिशिया रॉबिन्सन द्वारा | समाचार' },
    title: { en: 'The Secrets of Jain Architecture Explained', hi: 'जैन वास्तुकला के रहस्य समझाए गए' }
  },
  {
    image: 'https://picsum.photos/seed/event3/600/400',
    date: { en: '26 Oct 2025', hi: '26 अक्टूबर 2025' },
    category: { en: 'By Patricia Robinson | News', hi: 'पैट्रिशिया रॉबिन्सन द्वारा | समाचार' },
    title: { en: '10 Interesting Facts About the Jain Religion', hi: 'जैन धर्म के बारे में 10 रोचक तथ्य' }
  },
  {
    image: 'https://picsum.photos/seed/event4/600/400',
    date: { en: '2 Nov 2025', hi: '2 नवंबर 2025' },
    category: { en: 'By Patricia Robinson | News', hi: 'पैट्रिशिया रॉबिन्सन द्वारा | समाचार' },
    title: { en: 'The Meaning of Jain Spiritual Symbols', hi: 'जैन आध्यात्मिक प्रतीकों का अर्थ' }
  }
];

(function () {
  function div(className) {
    const el = document.createElement('div');
    el.className = className;
    return el;
  }

  // Registers both languages under a generated key so i18n.js handles switching.
  function addText(parent, tag, className, value, key) {
    if (!value) return;
    TRANSLATIONS.en[key] = value.en;
    TRANSLATIONS.hi[key] = value.hi || value.en;
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.setAttribute('data-i18n', key);
    el.textContent = value.en;
    parent.appendChild(el);
    return el;
  }

  function addImage(parent, event) {
    if (!event.image) return;
    const img = document.createElement('img');
    img.src = event.image;
    img.alt = event.alt || (event.title ? event.title.en : '');
    parent.appendChild(img);
  }

  // Splits a "DD Mon YYYY" date into its day or month part for both languages.
  function datePart(date, part) {
    return { en: date.en.split(' ')[part], hi: (date.hi || date.en).split(' ')[part] };
  }

  function keyFor(index) {
    return 'events.item' + index + '.';
  }

  /* ── Events page ── */
  function buildCard(event, index) {
    const key = keyFor(index);
    const article = document.createElement('article');
    article.className = 'event-card' + (event.featured ? ' featured' : '');
    addImage(article, event);

    const body = div('body');

    if (event.date) {
      const date = document.createElement('div');
      date.className = 'event-date';
      date.innerHTML = '<i class="bi bi-calendar3"></i> ';
      addText(date, 'span', '', event.date, key + 'date');
      body.appendChild(date);
    }
    addText(body, 'p', 'cat', event.category, key + 'category');
    addText(body, event.featured ? 'h4' : 'h5', '', event.title, key + 'title');
    addText(body, 'p', '', event.text, key + 'text');

    article.appendChild(body);
    return article;
  }

  function renderEventsPage(container) {
    const featuredRow = div('row g-4 mb-4');
    const gridRow = div('row g-4');
    container.appendChild(featuredRow);
    container.appendChild(gridRow);
    let gridCount = 0;

    EVENTS.forEach(function (event, index) {
      const col = document.createElement('div');
      if (event.featured) {
        col.className = 'col-lg-12 anim-fade-up';
        featuredRow.appendChild(col);
      } else {
        col.className = 'col-md-4 anim-fade-up';
        col.setAttribute('data-delay', String(gridCount++ % 3));
        gridRow.appendChild(col);
      }
      col.appendChild(buildCard(event, index));
    });
  }

  /* ── Home page: first featured event (or first event) plus the next 3 ── */
  function renderHomeEvents(container) {
    if (!EVENTS.length) return;
    let mainIndex = EVENTS.findIndex(function (e) { return e.featured; });
    if (mainIndex < 0) mainIndex = 0;
    const main = EVENTS[mainIndex];
    const mainKey = keyFor(mainIndex);

    const left = div('col-lg-6');
    const featured = div('blog-featured anim-fade-left');
    addImage(featured, main);
    addText(featured, 'p', 'cat', main.category, mainKey + 'category');
    addText(featured, 'h4', '', main.title, mainKey + 'title');
    addText(featured, 'p', '', main.text, mainKey + 'text');
    left.appendChild(featured);

    const right = div('col-lg-6');
    let shown = 0;
    EVENTS.forEach(function (event, index) {
      if (index === mainIndex || shown >= 3) return;
      const key = keyFor(index);
      const mini = div('blog-mini anim-fade-right');
      mini.setAttribute('data-delay', String(shown++));

      if (event.date) {
        const box = div('date-box');
        addText(box, 'div', 'day', datePart(event.date, 0), key + 'day');
        addText(box, 'div', 'mon', datePart(event.date, 1), key + 'mon');
        mini.appendChild(box);
      }
      const text = div('blog-text');
      addText(text, 'h6', '', event.title, key + 'title');
      addText(text, 'span', '', event.category, key + 'category');
      mini.appendChild(text);
      right.appendChild(mini);
    });

    container.appendChild(left);
    container.appendChild(right);
  }

  const page = document.getElementById('eventsContainer');
  if (page) renderEventsPage(page);

  const home = document.getElementById('homeEventsContainer');
  if (home) renderHomeEvents(home);
})();
