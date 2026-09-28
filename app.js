const I18N = {
en: {
  "nav.services": "Services", "nav.why": "Why us", "nav.gallery": "Gallery", "nav.visit": "Visit us", "nav.faq": "FAQ", "nav.contact": "Contact",
  "nav.call": "(587) 414-7429",
  "hero.kicker": "Calgary, Alberta · Auto repair & maintenance",
  "hero.title": "Your car,<br>repaired right.",
  "hero.sub": "Northline Automotive keeps Calgary drivers on the road with honest auto repair and maintenance — clear prices, careful work, done right the first time.",
  "hero.cta1": "Book a repair", "hero.cta2": "See services",
  "walkin.w1t": "Mon – Fri 8am – 5pm", "walkin.w1d": "Weekends closed",
  "walkin.w2t": "Repair + maintenance", "walkin.w2d": "Full-service auto care",
  "walkin.w3t": "All makes", "walkin.w3d": "Cars, SUVs, light trucks",
  "stats.hoursNum": "Mon – Fri", "stats.hours": "8am to 5pm, weekdays",
  "stats.makesNum": "All", "stats.makes": "makes & models serviced",
  "stats.diagNum": "100%", "stats.diag": "electronic diagnostics",
  "stats.quoteNum": "Clear", "stats.quote": "quote before every repair",
  "services.kicker": "What we do", "services.title": "Full-service auto care under one roof",
  "services.s1t": "General Auto Repair", "services.s1d": "Diagnosis and repair for cars, SUVs and light trucks of all makes.",
  "services.s2t": "Oil Changes & Maintenance", "services.s2d": "Regular maintenance to keep your engine running strong — fluids, filters and inspections.",
  "services.s3t": "Brakes", "services.s3d": "Pads, rotors and full brake system inspection — your safety first.",
  "services.s4t": "Tires", "services.s4d": "Sales, installation, rotation and balancing — including seasonal changeovers for Calgary winters.",
  "services.s5t": "Electronic Diagnostics", "services.s5d": "We find the real problem with modern diagnostic equipment instead of guessing.",
  "services.s6t": "Air Conditioning", "services.s6d": "Recharge, leak detection and A/C system repair for summer comfort.",
  "why.kicker": "Why choose us", "why.title": "Repaired right the first time",
  "why.intro": "We believe in simple things: an accurate diagnosis, a price explained up front and careful work. You leave knowing exactly what was done — and why.",
  "why.l1t": "Honest diagnosis", "why.l1d": "We explain what is needed — and what isn't.",
  "why.l2t": "Clear quote", "why.l2d": "The price is confirmed before we touch your car.",
  "why.l3t": "Careful work", "why.l3d": "We stand behind every repair we do.",
  "why.l4t": "Calgary, easy to reach", "why.l4d": "On 4 St NE, open Monday to Friday.",
  "gallery.kicker": "The shop in action", "gallery.title": "A tidy shop, careful work",
  "gallery.c1": "Brakes inspected and replaced with care",
  "gallery.c2": "Clean bays, the right equipment",
  "gallery.c3": "Tire service, torqued to spec",
  "visit.kicker": "New in the neighbourhood?", "visit.title": "Come see the shop for yourself",
  "visit.more": "Find us at 123 4 St NE, Calgary — drop by during opening hours or find us on Google Maps",
  "faq.kicker": "Good to know", "faq.title": "Frequently asked questions",
  "faq.q1": "What are your opening hours?",
  "faq.a1": "Monday to Friday, 8:00 AM to 5:00 PM. Closed on weekends.",
  "faq.q2": "Do you service all vehicle brands?",
  "faq.a2": "Yes — cars, SUVs and light trucks of all makes, with quality parts.",
  "faq.q3": "How does a diagnostic work?",
  "faq.a3": "We hook your vehicle up to our electronic diagnostic equipment, explain the problem and confirm the price before any repair.",
  "faq.q4": "Do I need an appointment?",
  "faq.a4": "Appointments are recommended — call (587) 414-7429 or drop by during opening hours.",
  "contact.kicker": "Come see us", "contact.title": "Book your repair",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "footer.tag": "Auto repair & maintenance · Calgary, Alberta"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Northline Automotive — Auto Repair in Calgary, AB | Trusted Mechanics";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
