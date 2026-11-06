/**
 * Chaturmas page content — extends TRANSLATIONS (loaded after translations.js).
 */
(function () {
  var CHATURMAS_YEARS = [
    { year: 1994, hi: 'आगरा, उत्तरप्रदेश', en: 'Agra, Uttar Pradesh' },
    { year: 1995, hi: 'इटावा, उत्तरप्रदेश', en: 'Etawah, Uttar Pradesh' },
    { year: 1996, hi: 'कुरावली, उत्तरप्रदेश', en: 'Kurauli, Uttar Pradesh' },
    { year: 1997, hi: 'बड़ौत, उत्तरप्रदेश', en: 'Baraut, Uttar Pradesh' },
    { year: 1998, hi: 'गोहाना', en: 'Gohana' },
    { year: 1999, hi: 'चंडीगढ़', en: 'Chandigarh' },
    { year: 2000, hi: 'सहारनपुर, उत्तरप्रदेश', en: 'Saharanpur, Uttar Pradesh' },
    { year: 2001, hi: 'मुरादाबाद, उत्तरप्रदेश', en: 'Moradabad, Uttar Pradesh' },
    { year: 2002, hi: 'शिखरजी', en: 'Shikhar Ji' },
    { year: 2003, hi: 'सिरसागंज, उत्तरप्रदेश', en: 'Sirsa Ganj, Uttar Pradesh' },
    { year: 2004, hi: 'त्रिनगर, दिल्ली', en: 'Trinagar, Delhi' },
    { year: 2005, hi: 'अजमेर, राजस्थान', en: 'Ajmer, Rajasthan' },
    { year: 2006, hi: 'त्रिनगर, दिल्ली', en: 'Trinagar, Delhi' },
    { year: 2007, hi: 'छोटा बाजार, शाहदरा, दिल्ली', en: 'Chhota Bazar, Shahdara, Delhi' },
    { year: 2008, hi: 'सुल्तानपुर', en: 'Sultanpur' },
    { year: 2009, hi: 'शामली', en: 'Shamli' },
    { year: 2010, hi: 'बिहारी कॉलोनी, दिल्ली', en: 'Bihari Colony, Delhi' },
    { year: 2011, hi: 'गुड़गांव, हरियाणा', en: 'Gurgaon, Haryana' },
    { year: 2012, hi: 'बूंदी, राजस्थान', en: 'Bundi, Rajasthan' },
    { year: 2013, hi: 'केसरगंज, अजमेर, राजस्थान', en: 'Kesarganj, Ajmer, Rajasthan' },
    { year: 2014, hi: 'रोहतक', en: 'Rohtak' },
    { year: 2015, hi: '—', en: '—' },
    { year: 2016, hi: 'श्री महावीर जी, जिला हिंडौन, राजस्थान', en: 'Shri Mahavir Ji, Hindon District, Rajasthan' },
    { year: 2017, hi: 'भीलवाड़ा, राजस्थान', en: 'Bhilwara, Rajasthan' },
    { year: 2018, hi: 'नजफगढ़, दिल्ली', en: 'Najafgarh, Delhi' },
    { year: 2019, hi: 'राणा प्रताप बाग, दिल्ली', en: 'Rana Pratap Bagh, Delhi' },
    { year: 2020, hi: 'कोसी, उत्तरप्रदेश', en: 'Kosi, Uttar Pradesh' },
    { year: 2021, hi: 'श्री महावीर जी, जिला हिंडौन, राजस्थान', en: 'Shri Mahavir Ji, Hindon District, Rajasthan' },
    { year: 2022, hi: 'श्री महावीर जी', en: 'Mahavir Ji' },
    { year: 2023, hi: 'मुरादाबाद', en: 'Moradabad' },
    { year: 2024, hi: 'टीकमगढ़', en: 'Tikamgarh' },
    { year: 2025, hi: 'भोपाल', en: 'Bhopal' },
    { year: 2026, hi: 'भिवंडी, मुंबई', en: 'Bhiwandi, Mumbai' }
  ];

  function renderChaturmasYears(lang) {
    var grid = document.getElementById('chaturmasYearsGrid');
    if (!grid) return;

    var currentYear = new Date().getFullYear();
    grid.innerHTML = CHATURMAS_YEARS.map(function (item) {
      var loc = lang === 'hi' ? item.hi : item.en;
      var isEmpty = loc === '—';
      var isCurrent = item.year === currentYear;
      return (
        '<div class="year-row' + (isEmpty ? ' year-row-empty' : '') + (isCurrent ? ' current' : '') + '">' +
          '<span class="year-label">' + item.year + '</span>' +
          '<span class="year-location">' + loc + '</span>' +
        '</div>'
      );
    }).join('');
  }

  Object.assign(TRANSLATIONS.en, {
    'chaturmas.heading': 'Chaturmas',
    'chaturmas.heroSub': 'Four months of devotion, discourse and spiritual upliftment',
    'chaturmas.intro':
      'Chaturmas is the sacred four-month period of the rainy season when Jain ascetics halt their wanderings and stay at one place to engage in penance, study, and spiritual discourse. For the shravak society, it is a blessed time to receive the darshan, guidance and inspiration of saints and aryikas.',
    'chaturmas.significanceTitle': 'Significance of Chaturmas',
    'chaturmas.significanceText':
      'During Chaturmas, the entire Jain community comes together in devotion. Pravachans, pujan, japya anushthan, and religious gatherings inspire thousands toward the path of restraint, compassion and self-welfare. It is a time when hearts turn toward dharma and society receives the light of spiritual wisdom.',
    'chaturmas.card1.title': 'Four Sacred Months',
    'chaturmas.card1.text':
      'From Ashadh Shukla Ekadashi to Kartik Shukla Ekadashi, ascetics observe Chaturmas at a chosen place with strict discipline and spiritual practice.',
    'chaturmas.card2.title': 'Pravachan & Sadhana',
    'chaturmas.card2.text':
      'Daily discourses on Agam scriptures, Bhaktamar, and Jain philosophy deepen understanding and strengthen faith among devotees.',
    'chaturmas.card3.title': 'Seva & Harmony',
    'chaturmas.card3.text':
      'The shravak society arranges food, accommodation and all necessities for the Chaturvidh Sangh, fostering unity and selfless service.',
    'chaturmas.matajiTitle': "Pujya Mataji's Chaturmas",
    'chaturmas.matajiText':
      "Under the inspiration of Param Pujya Jin Dharma Prabhavika Aryika Ratna 105 Shri Sristhi Bhushan Mataji, Chaturmas becomes a grand festival of dharma. Mataji's melodious voice, powerful discourse and affectionate guidance draw devotees from far and wide. Communities eagerly compete for the fortune of hosting Mataji's Chaturmas.",
    'chaturmas.highlights':
      '<li>Religious discourses and pravachans that inspire thousands toward the path of moksha.</li><li>Organization of pujan, vidhan, japya anushthan and other devotional programs.</li><li>Educational camps and examinations for the new generation during Chaturmas.</li><li>Continuous food and service arrangements for the Chaturvidh Sangh.</li><li>Medical camps and charitable activities for the welfare of society.</li>',
    'chaturmas.historyTitle': 'Year-wise Chaturmas',
    'chaturmas.historySub': 'Places where Param Pujya Mataji observed Chaturmas from 1994 to 2026'
  });

  Object.assign(TRANSLATIONS.hi, {
    'chaturmas.heading': 'चातुर्मास',
    'chaturmas.heroSub': 'भक्ति, प्रवचन और आध्यात्मिक उत्थान के पवित्र चार मास',
    'chaturmas.intro':
      'चातुर्मास वर्षा ऋतु का पवित्र चार मासीय काल है जब जैन साधु-साध्वी अपनी विहार यात्रा रोककर एक स्थान पर तप, अध्ययन और धार्मिक प्रवचन में लीन रहते हैं। श्रावक समाज के लिए यह संतों और आर्यिकाओं के दर्शन, मार्गदर्शन और प्रेरणा प्राप्त करने का पुण्य काल है।',
    'chaturmas.significanceTitle': 'चातुर्मास का महत्व',
    'chaturmas.significanceText':
      'चातुर्मास के दौरान सम्पूर्ण जैन समाज भक्ति में एकजुट होता है। प्रवचन, पूजन, जाप्यानुष्ठान और धार्मिक सभाएँ हजारों लोगों को संयम, करुणा और आत्मकल्याण के पथ की ओर प्रेरित करती हैं। यह वह समय है जब हृदय धर्म की ओर झुकते हैं और समाज आध्यात्मिक ज्ञान का प्रकाश प्राप्त करता है।',
    'chaturmas.card1.title': 'चार पवित्र मास',
    'chaturmas.card1.text':
      'आषाढ़ शुक्ल एकादशी से कार्तिक शुक्ल एकादशी तक साधु-साध्वीगण चुने हुए स्थान पर कठोर संयम और साधना के साथ चातुर्मास पालन करते हैं।',
    'chaturmas.card2.title': 'प्रवचन एवं साधना',
    'chaturmas.card2.text':
      'आगम ग्रंथों, भक्तामर और जैन दर्शन पर दैनिक प्रवचन भक्तों में समझ गहरी करते हैं और श्रद्धा को मजबूत बनाते हैं।',
    'chaturmas.card3.title': 'सेवा एवं सामंजस्य',
    'chaturmas.card3.text':
      'श्रावक समाज चतुर्विध संघ के लिए आहार, आवास और सभी आवश्यकताओं की व्यवस्था कर एकता और निःस्वार्थ सेवा का संदेश देता है।',
    'chaturmas.matajiTitle': 'पूज्य माताजी का चातुर्मास',
    'chaturmas.matajiText':
      'परम पूज्य जिनधर्म प्रभाविका आर्यिका रत्न 105 श्री सृष्टि भूषण माताजी की प्रेरणा में चातुर्मास धर्म का भव्य उत्सव बन जाता है। माताजी की मधुर वाणी, ओजस्वी प्रवचन और वात्सल्यपूर्ण मार्गदर्शन दूर-दूर से भक्तों को आकर्षित करता है। समाजों में माताजी का चातुर्मास पाने के लिए उत्साह की होड़ सी मची रहती है।',
    'chaturmas.highlights':
      '<li>मोक्ष के पथ की ओर हजारों को प्रेरित करने वाले धार्मिक प्रवचन।</li><li>पूजन, विधान, जाप्यानुष्ठान आदि भक्तिमय कार्यक्रमों का आयोजन।</li><li>नव पीढ़ी हेतु चातुर्मास में शैक्षणिक शिविर और परीक्षाएँ।</li><li>चतुर्विध संघ के लिए निरंतर आहार और सेवा व्यवस्था।</li><li>जन कल्याण हेतु चिकित्सा शिविर और धर्मार्थ कार्य।</li>',
    'chaturmas.historyTitle': 'वर्षवार चातुर्मास',
    'chaturmas.historySub': '1994 से 2026 तक पूज्य माताजी द्वारा चातुर्मास स्थल'
  });

  document.addEventListener('DOMContentLoaded', function () {
    var lang = window.SiteI18n ? SiteI18n.getLang() : 'en';
    renderChaturmasYears(lang);

    var select = document.getElementById('langSelect');
    if (select) {
      select.addEventListener('change', function () {
        renderChaturmasYears(select.value);
      });
    }
  });
})();
