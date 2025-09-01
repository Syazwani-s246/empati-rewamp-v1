// src/data/chatbotData.ts

export const quotes = [
  "Hari ini mungkin susah, tapi esok ada peluang baru. 🌱",
  "Setiap langkah kecil tetap berharga. 🚶",
  "Anda lebih kuat daripada apa yang anda fikirkan. 💪",
  "Jangan lupa tarik nafas, tenangkan fikiran. 🌿",
  "Bersyukur atas perkara kecil, ia membawa ketenangan besar. ✨",
];

export const jokes = [
  "Kenapa komputer selalu lapar? Sebab dia asyik makan RAM 🤭",
  "Kenapa buku matematik sedih? Sebab terlalu banyak masalah 📘😂",
  "Kenapa burung tak pergi hospital? Sebab dia dah ada tweet-ment 🐦",
];

export const chatbotResponses: { keywords: string[]; reply: string | (() => string) }[] = [
  {
    keywords: ["sertai", "join", "daftar"],
    reply: "Anda boleh sertai komuniti kami melalui borang di bahagian 'Sertai Kami'.",
  },
  {
    keywords: ["program", "aktiviti", "acara"],
    reply: "Program seterusnya akan diumumkan di laman utama kami. Nantikan ya!",
  },
  {
    keywords: ["apa itu", "siapa anda", "komuniti"],
    reply: "Kami adalah komuniti sokongan kesihatan mental yang mesra dan terbuka untuk semua.",
  },
  {
    keywords: ["hubungi", "contact", "nombor"],
    reply: "Anda boleh hubungi kami melalui emel rasmi atau media sosial di bahagian 'Hubungi Kami'.",
  },
  {
    keywords: ["bantuan", "support"],
    reply: "Kami sedia membantu dengan rujukan sokongan komuniti. Untuk kecemasan, sila hubungi 999.",
  },
  {
    keywords: ["stress", "penat", "tekanan"],
    reply: "Cuba tarik nafas perlahan 4 saat... tahan 4 saat... hembus 4 saat. 🌬️ Ulang 3 kali. Anda boleh lakukannya.",
  },
  {
    keywords: ["hi", "hai", "hello", "hey"],
    reply: "Hai! 👋 Apa khabar hari ini?",
  },
  {
    keywords: ["quote", "motivasi", "kata semangat"],
    reply: () => quotes[Math.floor(Math.random() * quotes.length)],
  },
  {
    keywords: ["lawak", "joke", "bosan"],
    reply: () => jokes[Math.floor(Math.random() * jokes.length)],
  },
  {
    keywords: ["pagi", "selamat pagi"],
    reply: "Selamat pagi ☀️ Semoga hari anda penuh semangat dan tenang.",
  },
  {
    keywords: ["malam", "selamat malam"],
    reply: "Selamat malam 🌙 Rehat secukupnya, esok hari baru.",
  },
  {
    keywords: ["sedih", "😢", "😭"],
    reply: "Saya faham anda sedang rasa sedih 😔. Ingat, anda tidak keseorangan. Jika perlukan teman bicara, komuniti kami sentiasa terbuka.",
  },
  {
    keywords: ["gembira", "😊", "😁"],
    reply: "Seronok dengar anda rasa gembira! 🎉 Teruskan nikmati momen positif ini.",
  },
  {
    keywords: ["sosmed", "instagram", "facebook"],
    reply: "Anda boleh ikuti kami di Instagram & Facebook rasmi untuk kemaskini terkini 📱",
  },
  {
    keywords: ["lokasi", "alamat"],
    reply: "Pusat komuniti kami terletak di Kuala Lumpur. (Prototype sahaja, bukan lokasi sebenar).",
  },
  {
    keywords: ["faq", "tolong", "apa boleh taip"],
    reply: "Anda boleh cuba taip: *sertai*, *program*, *bantuan*, *quote*, *lawak*, *hubungi*.",
  },
];
