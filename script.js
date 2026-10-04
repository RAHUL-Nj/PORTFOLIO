// Auto Update Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// 1. CYBERSECURITY MATRIX CANVAS ANIMATION
const canvas = document.getElementById('cyber-bg');
if (canvas) {
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/$#%&*';
  const fontSize = 14;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(9, 13, 22, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff66';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 45);
}

// 2. MOBILE NAVIGATION MENU TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 3. SMOOTH SCROLL FOR NAVBAR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// 4. PROJECT MODALS DATA & EVENT HANDLERS
const projectData = {
  sniffer: {
    title: "Advanced Network Packet Sniffer",
    tag: "NETWORK SECURITY",
    description: "A Python-based network packet sniffer using Scapy to capture, filter, and analyze live network traffic. Built for analyzing protocols, monitoring suspicious packet flow, and troubleshooting network issues in real time.",
    tech: ["Python", "Scapy", "Wireshark", "Network Security"],
    github: "https://github.com/RAHUL-Nj"
  },
  blockchain: {
    title: "Blockchain Cryptography Simulation",
    tag: "CRYPTOGRAPHY",
    description: "An interactive browser-based web application demonstrating core blockchain and cryptographic principles including transaction hashing, proof-of-work mining, and block verification.",
    tech: ["HTML5", "CSS3", "JavaScript", "CryptoJS"],
    github: "https://github.com/RAHUL-Nj"
  },
  phishing: {
    title: "Phishing & Malicious Link Detection Tool",
    tag: "THREAT DETECTION",
    description: "A front-end detection interface designed to analyze suspicious URLs, email text, and SMS content for phishing indicators, deceptive domain structures, and known threat patterns.",
    tech: ["HTML5", "CSS3", "JavaScript", "OSINT Techniques"],
    github: "https://github.com/RAHUL-Nj"
  }
};

const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');

// Handle Project Card Clicks
document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.getAttribute('data-project');
    const data = projectData[key];

    if (data && modal && modalContent) {
      modalContent.innerHTML = `
        <div style="font-family: monospace; color: var(--accent); font-size: 11px; margin-bottom: 8px;">[ ${data.tag} ]</div>
        <h3 style="font-size: 22px; margin-bottom: 12px; color: var(--text);">${data.title}</h3>
        <p style="color: var(--muted); font-size: 14px; margin-bottom: 20px; line-height: 1.6;">${data.description}</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
          ${data.tech.map(t => `<span style="font-size: 11px; font-family: monospace; background: rgba(0,255,102,0.1); border: 1px solid var(--accent); color: var(--accent); padding: 2px 8px; border-radius: 4px;">${t}</span>`).join('')}
        </div>
        <div style="display: flex; gap: 12px;">
          <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size: 13px;">View Repository ↗</a>
        </div>
      `;
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('open');
    }
  });
});

// Close Modal Handlers
document.querySelectorAll('[data-close-modal]').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    if (modal) {
      modal.setAttribute('aria-hidden', 'true');
      modal.classList.remove('open');
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('open');
  }
});
