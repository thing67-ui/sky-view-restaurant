/* ============================================
   SKY VIEW RESTAURANT — main.js
   ============================================ */

/* ---------- 1. NAVBAR SCROLL EFFECT ---------- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


/* ---------- 2. HAMBURGER MOBILE MENU ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow =
    navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});


/* ---------- 3. LANGUAGE TOGGLE (EN / BN) ---------- */
const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

const translations = {
  en: {
    // Navbar
    'nav-cta':         'Call Now',
    // Hero
    'hero-top':        'Rooftop Dining · Noakhali',
    'hero-title':      'Sky View<br/>Restaurant',
    'hero-tagline':    'High above the city, perfect for your cravings.',
    'hero-btn1':       'Explore Menu',
    'hero-btn2':       'Find Us',
    // About
    'about-label':     'Our Story',
    'about-title':     'Above the City,<br/>Close to Your Heart',
    'about-body1':     'Perched on the rooftop of Centerpoint in the heart of Maijdee Court, Sky View Restaurant offers more than just a meal — it offers an experience. With sweeping views of Noakhali and a warm, inviting atmosphere, every visit feels like a special occasion.',
    'about-body2':     'We believe great food brings people together. Whether you are here for a family dinner, a quiet evening, or a celebration — Sky View is your place above it all.',
    'about-btn':       'Reserve a Table',
    // Menu
    'menu-label':      'What We Serve',
    'menu-title':      'Our Menu',
    'menu-subtitle':   'Fresh ingredients, authentic flavors, crafted with love.',
    // Gallery
    'gallery-label':   'Visual Story',
    'gallery-title':   'Gallery',
    // Hours
    'hours-label':     'When To Visit',
    'hours-title':     'Opening Hours',
    'day1':            'Saturday – Wednesday',
    'time1':           '11:00 AM – 10:30 PM',
    'day2':            'Thursday',
    'time2':           '11:00 AM – 10:30 PM',
    'day3':            'Friday',
    'time3':           '2:00 PM – 10:30 PM',
    'day4':            'Sunday',
    'time4':           '11:00 AM – 10:00 PM',
    // Location
    'location-label':  'Find Us',
    'location-title':  'We Are Here',
    'loc-name':        'Sky View Restaurant',
    'loc-address':     'Located inside Centerpoint (Rooftop)<br/>Main Road, Boro Masjid Moor<br/>Maijdee Court, Noakhali 3800<br/>Bangladesh',
    'loc-phone-label': 'Phone',
    'loc-phone':       '01933-396669',
    'loc-code-label':  'Plus Code',
    'loc-code':        'V38W+2P Noakhali',
    'loc-btn':         'Open in Google Maps',
    // Contact
    'contact-label':   'Get In Touch',
    'contact-title':   'Come Dine With Us',
    'contact-subtitle':'Reserve your table or simply stop by. We would love to have you.',
    'contact-btn1':    '📞 Call 01933-396669',
    'contact-btn2':    '📍 Get Directions',
    // Footer
    'footer-tagline':       'High above the city,<br/>perfect for your cravings.',
    'footer-nav-title':     'Quick Links',
    'footer-contact-title': 'Contact',
    'footer-address':       'Centerpoint (Rooftop), Main Road<br/>Boro Masjid Moor, Maijdee Court<br/>Noakhali 3800, Bangladesh',
    'footer-copy':          '© 2025 Sky View Restaurant. All rights reserved.',
  },

  bn: {
    // Navbar
    'nav-cta':         'এখনই কল করুন',
    // Hero
    'hero-top':        'রুফটপ ডাইনিং · নোয়াখালী',
    'hero-title':      'স্কাই ভিউ<br/>রেস্তোরাঁ',
    'hero-tagline':    'শহরের উপরে, আপনার রুচির জন্য পারফেক্ট।',
    'hero-btn1':       'মেনু দেখুন',
    'hero-btn2':       'আমাদের খুঁজুন',
    // About
    'about-label':     'আমাদের গল্প',
    'about-title':     'শহরের উপরে,<br/>হৃদয়ের কাছে',
    'about-body1':     'ময়জদী কোর্টের প্রাণকেন্দ্রে সেন্টারপয়েন্টের ছাদে অবস্থিত স্কাই ভিউ রেস্তোরাঁ শুধু খাবার নয় — একটি অনন্য অভিজ্ঞতা প্রদান করে। নোয়াখালীর বিস্তৃত দৃশ্য এবং উষ্ণ পরিবেশে প্রতিটি সন্ধ্যা হয়ে ওঠে বিশেষ মুহূর্ত।',
    'about-body2':     'আমরা বিশ্বাস করি ভালো খাবার মানুষকে কাছে আনে। পারিবারিক নৈশভোজ, নিরিবিলি সন্ধ্যা বা উদযাপন — স্কাই ভিউ সবসময় আপনার পাশে।',
    'about-btn':       'টেবিল বুক করুন',
    // Menu
    'menu-label':      'আমরা যা পরিবেশন করি',
    'menu-title':      'আমাদের মেনু',
    'menu-subtitle':   'তাজা উপকরণ, খাঁটি স্বাদ, ভালোবাসায় তৈরি।',
    // Gallery
    'gallery-label':   'দৃশ্যগল্প',
    'gallery-title':   'গ্যালারি',
    // Hours
    'hours-label':     'কখন আসবেন',
    'hours-title':     'খোলার সময়',
    'day1':            'শনিবার – বুধবার',
    'time1':           'সকাল ১১:০০ – রাত ১০:৩০',
    'day2':            'বৃহস্পতিবার',
    'time2':           'সকাল ১১:০০ – রাত ১০:৩০',
    'day3':            'শুক্রবার',
    'time3':           'দুপুর ২:০০ – রাত ১০:৩০',
    'day4':            'রবিবার',
    'time4':           'সকাল ১১:০০ – রাত ১০:০০',
    // Location
    'location-label':  'আমাদের খুঁজুন',
    'location-title':  'আমরা এখানে আছি',
    'loc-name':        'স্কাই ভিউ রেস্তোরাঁ',
    'loc-address':     'সেন্টারপয়েন্টের ভেতরে (ছাদতলা)<br/>মেইন রোড, বড় মসজিদ মোড়<br/>ময়জদী কোর্ট, নোয়াখালী ৩৮০০<br/>বাংলাদেশ',
    'loc-phone-label': 'ফোন',
    'loc-phone':       '০১৯৩৩-৩৯৬৬৬৯',
    'loc-code-label':  'প্লাস কোড',
    'loc-code':        'V38W+2P নোয়াখালী',
    'loc-btn':         'গুগল ম্যাপে খুলুন',
    // Contact
    'contact-label':   'যোগাযোগ করুন',
    'contact-title':   'আমাদের সাথে খান',
    'contact-subtitle':'টেবিল বুক করুন বা সরাসরি চলে আসুন। আমরা আপনাকে স্বাগত জানাতে অপেক্ষায় আছি।',
    'contact-btn1':    '📞 কল করুন ০১৯৩৩-৩৯৬৬৬৯',
    'contact-btn2':    '📍 পথনির্দেশ পান',
    // Footer
    'footer-tagline':       'শহরের উপরে,<br/>আপনার রুচির জন্য পারফেক্ট।',
    'footer-nav-title':     'দ্রুত লিংক',
    'footer-contact-title': 'যোগাযোগ',
    'footer-address':       'সেন্টারপয়েন্ট (ছাদতলা), মেইন রোড<br/>বড় মসজিদ মোড়, ময়জদী কোর্ট<br/>নোয়াখালী ৩৮০০, বাংলাদেশ',
    'footer-copy':          '© ২০২৫ স্কাই ভিউ রেস্তোরাঁ। সর্বস্বত্ব সংরক্ষিত।',
  }
};

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'bn' : 'en';
  langToggle.textContent = currentLang === 'en' ? 'বাং' : 'EN';
  document.body.classList.toggle('lang-bn', currentLang === 'bn');
  applyTranslations(currentLang);
});

function applyTranslations(lang) {
  const t = translations[lang];
  Object.keys(t).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = t[id];
  });
}


/* ---------- 4. ACTIVE NAV LINK ON SCROLL ---------- */
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});


/* ---------- 5. SMOOTH FADE-IN ON SCROLL ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section').forEach(sec => {
  sec.classList.add('fade-section');
  observer.observe(sec);
});