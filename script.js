// ==========================================
// AŞAMALI METİNLER VE GIF'LER (Özelleştirilmiş!)
// ==========================================
const steps = [
  {
    text: "Emin misin? 🥺",
    btnText: "Hayır 🥺",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZtM3kyY2I2Mm1jNDBmaHRkNXExM3BxdTllZ3o0NXBhNWlqMWQzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L95W4wv8nnb9K/giphy.gif"
  },
  {
    text: "Bıdı Bıdı Yapma Kral",
    btnText: "Hâlâ Hayır 😤",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlzOGg5MG4zbml3eDVrNmp2NnBsaTN5Mzg5a2RvaWlpeTF2OGN2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wUKARAJWjKtHs6/giphy.gif"
  },
  {
    text: "Sen Ne Olsun İstiyosun",
    btnText: "Düşündüm, Hayır!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmhvd2V6b251Z3p6aGR3MGk5NmFuaThkNm92a2x0MnV2cTY0c283ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ISOckXUybVfQ4/giphy.gif"
  },
  {
    text: "Bak ağlarım ama... 😭",
    btnText: "Ağlama ama Hayır",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXA3ZXh3bmQ5enR5NzhxMjdleThnNGV6cnd0ODZqcW1mbjhzbXhhMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2lcHJTG5Tscg/giphy.gif"
  },
  {
    text: "Hadi süründürme işte",
    btnText: "Üzgünüm ama Hayır",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9oaGhzNXA2bmU3c2R1ZXdzc28wd3U0ZWV4aW0wZnd3OTFpa2dtcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
  },
  {
    text: "Lütfen bir şans ver! 🐱",
    btnText: "I-ıh 🙅‍♀️",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWcxdmF3anF5ZW5qYm90ZjFrcDlnMm9hZDJvdWhqNzlldnNmNXJkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/artj92V8o75VPL7AeQ/giphy.gif"
  },
  {
    text: "İstediğin filme de gideriz bak",
    btnText: "Rüşvet yemem!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVqNmlrcW96dDVydjFscG0yZW1tOGNtdnJwbGN3Z3E1dndwMnZyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BzyTuYCmvSORqs1ABM/giphy.gif"
  },
  {
    text: "Bu kadar odun olma",
    btnText: "Öyleyim 🗿",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWVjcWdnbjlsM2lkaXgyOHpnYXdtYnFrZnF1YmU3Nmhpa25vN2c3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7SF5scGB2AFrgsXP63/giphy.gif"
  },
  {
    text: "Buton küçücük kaldı bak basamazsın bile! 😈",
    btnText: "Baskıcı!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZtM3kyY2I2Mm1jNDBmaHRkNXExM3BxdTllZ3o0NXBhNWlqMWQzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mlvseq9yvZhba/giphy.gif"
  },
  {
    text: "Hâlâ basmaya çalışıyorsun pes et artık! 😂",
    btnText: "Pes etmem!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZtM3kyY2I2Mm1jNDBmaHRkNXExM3BxdTllZ3o0NXBhNWlqMWQzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L95W4wv8nnb9K/giphy.gif"
  },
  {
    text: "Baksana buton nokta kadar oldu! 🔍",
    btnText: "Nokta.",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmhvd2V6b251Z3p6aGR3MGk5NmFuaThkNm92a2x0MnV2cTY0c283ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ISOckXUybVfQ4/giphy.gif"
  },
  {
    text: "Kaçıyorum tutamazsın! 🏃‍♂️💨",
    btnText: "Kaçma!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXA3ZXh3bmQ5enR5NzhxMjdleThnNGV6cnd0ODZqcW1mbjhzbXhhMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2lcHJTG5Tscg/giphy.gif"
  },
  {
    text: "Evrene yanlış mesaj gönderiyorsun... ✨",
    btnText: "Mesaj alındı!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9oaGhzNXA2bmU3c2R1ZXdzc28wd3U0ZWV4aW0wZnd3OTFpa2dtcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
  },
  {
    text: "İnat etme işte, sen de çok istiyorsun! 🥰",
    btnText: "İnatçıyım!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlzOGg5MG4zbml3eDVrNmp2NnBsaTN5Mzg5a2RvaWlpeTF2OGN2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wUKARAJWjKtHs6/giphy.gif"
  },
  {
    text: "Tebrikler son seviyeye ulaştın ama Hayır yok! 🎮",
    btnText: "Son seviye!",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVqNmlrcW96dDVydjFscG0yZW1tOGNtdnJwbGN3Z3E1dndwMnZyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BzyTuYCmvSORqs1ABM/giphy.gif"
  },
  {
    text: "Kaçış bitti, artık sadece Evet var! ❤️",
    btnText: "...",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWcxdmF3anF5ZW5qYm90ZjFrcDlnMm9hZDJvdWhqNzlldnNmNXJkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/artj92V8o75VPL7AeQ/giphy.gif"
  }
];

// DOM Elemanları
const proposalCard = document.getElementById('proposal-card');
const successCard = document.getElementById('success-card');
const mainGif = document.getElementById('main-gif');
const questionText = document.getElementById('question-text');
const subtitle = document.getElementById('subtitle');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const btnCelebrate = document.getElementById('btn-celebrate');

let currentStep = 0;
let yesScale = 1;
let noScale = 1;

// ==========================================
// HAYIR BUTONU HAREKET & KÜÇÜLME MANTIĞI
// ==========================================
function moveNoButton() {
  const stepIndex = Math.min(currentStep, steps.length - 1);
  const stepData = steps[stepIndex];

  // 1. Metni ve GIF'i güncelle
  questionText.innerText = stepData.text;
  mainGif.src = stepData.gif;
  subtitle.innerText = "Hâlâ bir şansın varken kocaman olan Evet'e bas bence... ❤️";

  if (stepData.btnText) {
    btnNo.querySelector('span').innerText = stepData.btnText;
  }

  // 2. Evet butonunu büyüt
  yesScale += 0.22;
  btnYes.style.transform = `scale(${yesScale})`;
  btnYes.style.zIndex = "20";

  // 3. Hayır butonunu küçült
  noScale = Math.max(0.28, noScale - 0.055);

  // 4. Son adıma gelindiyse Hayır butonu tamamen yok olsun
  if (currentStep >= steps.length - 1) {
    btnNo.style.display = 'none';
    questionText.innerText = "Artık sadece Evet seçeneği kaldı! 🥰";
    subtitle.innerText = "Kaderine teslim ol ve bas şuna! ❤️";
    return;
  }

  // 5. Butonu ekranın sınırları içine güvenle ışınla (Evet butonunun üstüne/altına binmesini engelle)
  btnNo.classList.add('teleporting');
  
  const vw = window.visualViewport ? window.visualViewport.width : (document.documentElement.clientWidth || window.innerWidth);
  const vh = window.visualViewport ? window.visualViewport.height : (document.documentElement.clientHeight || window.innerHeight);

  // Gerçek buton boyutları (scale ile ölçeklenmiş)
  const rawWidth = btnNo.scrollWidth || btnNo.offsetWidth || 130;
  const rawHeight = btnNo.scrollHeight || btnNo.offsetHeight || 50;
  const actualWidth = rawWidth * noScale;
  const actualHeight = rawHeight * noScale;

  const safePaddingX = 20;
  const safeTop = 30;
  const safeBottom = 60;

  const maxLeft = Math.max(safePaddingX, Math.floor(vw - actualWidth - safePaddingX));
  const maxTop = Math.max(safeTop, Math.floor(vh - actualHeight - safeBottom));

  // Evet butonunun ekrandaki güncel pozisyonu
  const yesRect = btnYes.getBoundingClientRect();
  const avoidBuffer = 35; // Evet butonunun 35px çevresine hiç yaklaşmasın

  let randomX = safePaddingX;
  let randomY = safeTop;
  let attempts = 0;
  const maxAttempts = 35;

  while (attempts < maxAttempts) {
    randomX = Math.floor(Math.random() * (maxLeft - safePaddingX + 1)) + safePaddingX;
    randomY = Math.floor(Math.random() * (maxTop - safeTop + 1)) + safeTop;

    const noBox = {
      left: randomX,
      right: randomX + actualWidth,
      top: randomY,
      bottom: randomY + actualHeight
    };

    // Evet butonu ile çakışma kontrolü
    const overlapsWithYes = !(
      noBox.right < (yesRect.left - avoidBuffer) ||
      noBox.left > (yesRect.right + avoidBuffer) ||
      noBox.bottom < (yesRect.top - avoidBuffer) ||
      noBox.top > (yesRect.bottom + avoidBuffer)
    );

    if (!overlapsWithYes) {
      break; // Güvenli boş bir alan bulundu
    }
    attempts++;
  }

  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
  btnNo.style.transform = `scale(${noScale})`;

  currentStep++;
}

// Hayır butonuna tıklanma ve mobilde dokunma
btnNo.addEventListener('click', (e) => {
  e.preventDefault();
  moveNoButton();
});

btnNo.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});

// Masaüstünde üzerine gelindiğinde de kaçsın
btnNo.addEventListener('mouseenter', () => {
  moveNoButton();
});

// ==========================================
// EVET BUTONU VE KONFETİ EFEKTLERİ
// ==========================================
function triggerHeartsAndConfetti() {
  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 45;
    
    // Sol ve sağ köşelerden renkli konfetiler
    confetti({
      particleCount,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
      colors: ['#ff4b72', '#ff758c', '#ffd1dc', '#ffffff', '#ffb199', '#fbc2eb']
    });
    
    confetti({
      particleCount,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
      colors: ['#ff4b72', '#ff758c', '#ffd1dc', '#ffffff', '#ffb199', '#fbc2eb']
    });
  }, 220);
}

btnYes.addEventListener('click', () => {
  // 1. Konfetiyi patlat
  triggerHeartsAndConfetti();

  // 2. Proposal modunu kaldır (Date planı rahatça kaydırılabilsin)
  document.body.classList.remove('proposal-mode');

  // 3. Kartları değiştir
  proposalCard.classList.add('hidden');
  if (btnNo) btnNo.style.display = 'none';

  successCard.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Kutlama sayfasındaki tekrar patlat butonu
btnCelebrate.addEventListener('click', () => {
  triggerHeartsAndConfetti();
});

// ==========================================
// ARKA PLAN UÇUŞAN KALP ANİMASYONU
// ==========================================
function createFloatingHearts() {
  const container = document.getElementById('floating-hearts');
  const heartIcons = ['❤️', '💖', '💕', '✨', '🌸', '💘'];
  const heartCount = 18;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${6 + Math.random() * 6}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;

    container.appendChild(heart);
  }
}

// Sayfa yüklendiğinde kalpleri oluştur ve proposal modunu aç
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('proposal-mode');
  createFloatingHearts();
});
