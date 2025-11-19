export function getChatbotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim()

  // Greeting responses
  if (message.includes('halo') || message.includes('hai') || message.includes('hello')) {
    return 'Halo! 👋 Saya Tutor Budaya AI. Dengan senang hati saya akan membantu Anda mempelajari tradisi dan budaya Indonesia. Tanyakan tentang tradisi apapun, sejarahnya, atau nilai budayanya!'
  }

  if (message.includes('batik')) {
    return 'Batik adalah seni tradisional Indonesia yang terkenal di dunia! 🎨 Teknik pembuatan batik menggunakan lilin dan warna untuk menciptakan pola yang indah. Batik telah menjadi warisan dunia UNESCO sejak 2009. Setiap motif batik memiliki makna khusus yang terkait dengan filosofi Jawa, seperti simbol perlindungan, kesuburan, atau status sosial.'
  }

  if (message.includes('wayang')) {
    return 'Wayang adalah bentuk seni pertunjukan tradisional Indonesia yang sangat kaya! 🎭 Ada beberapa jenis wayang, termasuk wayang kulit (bayangan), wayang orang (manusia), dan wayang golek (boneka). Pertunjukan wayang sering menceritakan kisah dari Mahabharata dan Ramayana yang mengandung nilai-nilai moral dan kebijaksanaan.'
  }

  if (message.includes('tari') || message.includes('dance')) {
    return 'Tarian tradisional Indonesia sangat beragam! 💃 Dari Tari Reog Ponorogo yang dinamis, Tari Serimpi Jawa yang elegan, hingga Tari Kecak Bali yang mistis. Setiap tarian memiliki gerakan dan makna yang unik mencerminkan budaya daerahnya. Ingin tahu lebih banyak tentang tarian tertentu?'
  }

  if (message.includes('bali')) {
    return 'Bali memiliki budaya yang sangat kaya dan spiritual! 🏝️ Tradisi Hindu-Budha Bali tercermin dalam upacara seperti Nyepi (hari senyap), Ogoh-Ogoh (parade patung raksasa), dan Yadnya (upacara keagamaan). Seni lokal Bali termasuk tari kecak, ukiran kayu, dan tenun tradisional yang indah.'
  }

  if (message.includes('jawa')) {
    return 'Jawa adalah pusat peradaban dan budaya Indonesia! 🏛️ Budaya Jawa terkenal dengan wayang, batik, tari serimpi, dan nilai-nilai filosofi yang mendalam. Kerajaan-kerajaan besar seperti Majapahit dan Mataram Hindukustaka berasal dari Jawa, meninggalkan warisan budaya yang luar biasa.'
  }

  if (message.includes('sumatera') || message.includes('batak')) {
    return 'Budaya Batak di Sumatera Utara sangat unik dan kuat! 🎵 Tradisi Batak termasuk Tari Tor-Tor yang energik, Rumah Bolon (arsitektur tradisional), dan musik tradisional Batak yang meriah. Suku Batak dikenal dengan solidaritas komunitas yang kuat dan nilai-nilai filosofi yang dalam.'
  }

  if (message.includes('sulawesi') || message.includes('makassar') || message.includes('bugis')) {
    return 'Sulawesi memiliki warisan maritim dan kesenian yang luar biasa! ⛵ Budaya Bugis-Makassar terkenal dengan Perahu Pinisi (kapal layar tradisional), Tari Pakarena yang elegan, dan keahlian navigasi yang tinggi. Masyarakat Bugis-Makassar dikenal sebagai pelaut handal dan pedagang yang tangguh.'
  }

  if (message.includes('acara') || message.includes('event') || message.includes('jadwal')) {
    return 'Saya punya informasi lengkap tentang jadwal event budaya! 📅 Ada berbagai festival dan upacara adat yang digelar sepanjang tahun di berbagai provinsi. Dari Hari Batik Nasional (Oktober) hingga Festival Reog (Agustus). Mau tahu event budaya apa yang akan datang?'
  }

  if (message.includes('makna') || message.includes('filosofi')) {
    return 'Budaya Indonesia penuh dengan makna dan filosofi yang mendalam! 🧘 Setiap tradisi, gerakan, dan simbol memiliki makna yang terkait dengan nilai-nilai kehidupan, spiritualitas, dan hubungan dengan alam. Ingin tahu makna spesifik dari tradisi atau seni tertentu?'
  }

  if (message.includes('pelestarian') || message.includes('preservasi')) {
    return 'Pelestarian budaya adalah tanggung jawab kita bersama! 🌏 Platform Nusantara Cultural Atlas dibuat untuk mendokumentasikan dan mempromosikan warisan budaya Indonesia agar tetap hidup di hati generasi muda. Dengan mempelajari budaya, kita turut menjaga dan melestarikannya.'
  }

  if (message.includes('terima kasih') || message.includes('thanks') || message.includes('terimakasih')) {
    return 'Sama-sama! 😊 Senang bisa membantu Anda belajar tentang budaya Indonesia. Jika ada pertanyaan lagi tentang tradisi, kesenian, atau sejarah budaya, jangan ragu untuk bertanya. Selamat menjelajahi keindahan budaya Nusantara! 🌺'
  }

  if (message.includes('apa') && message.includes('itu')) {
    return 'Saya siap menjawab! 😊 Coba tanyakan dengan lebih spesifik. Misalnya: "Apa itu Batik?", "Apa itu Wayang?", atau "Apa itu Reog?" Saya akan memberikan penjelasan yang detail dan menarik!'
  }

  if (message === '' || message === '?') {
    return 'Silakan tanya sesuatu tentang budaya Indonesia! 🇮🇩 Saya bisa membantu dengan informasi tentang tradisi, tarian, kerajinan, sejarah, dan banyak lagi. Apa yang ingin Anda ketahui?'
  }

  // Default response
  return 'Pertanyaan yang menarik! 🤔 Saya mungkin belum punya informasi spesifik tentang itu, tapi saya tahu banyak hal tentang tradisi dan budaya Indonesia secara umum. Coba tanyakan tentang tradisi tertentu, seperti batik, wayang, tari, atau budaya daerah spesifik. Apa yang ingin Anda pelajari?'
}
