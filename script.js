// Auto Update Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// 1. REALISTIC ROAMING SPIDER LOGIC
const bug = document.getElementById('cyber-bug');
if (bug) {
  let bugX = window.innerWidth / 2;
  let bugY = window.innerHeight / 3;
  let targetX = bugX;
  let targetY = bugY;
  let currentAngle = 0;
  let speed = 2.5;
  let isMoving = false;

  function updateBugPosition() {
    let dx = targetX - bugX;
    let dy = targetY - bugY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 5) {
      isMoving = true;
      bug.classList.add('walking');

      // Calculate Rotation Angle
      let targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      
      // Smooth Rotation
      let angleDiff = targetAngle - currentAngle;
      while (angleDiff < -180) angleDiff += 360;
      while (angleDiff > 180) angleDiff -= 360;
      currentAngle += angleDiff * 0.15;

      // Move toward target
      bugX += (dx / dist) * speed;
      bugY += (dy / dist) * speed;

      bug.style.transform = `translate3d(${bugX}px, ${bugY}px, 0) rotate(${currentAngle}deg)`;
    } else {
      if (isMoving) {
        isMoving = false;
        bug.classList.remove('walking');
        // Pause at destination, then choose new target
        setTimeout(setRandomTarget, Math.random() * 2000 + 1000);
      }
    }
    requestAnimationFrame(updateBugPosition);
  }

  function setRandomTarget() {
    let padding = 80;
    targetX = padding + Math.random() * (window.innerWidth - padding * 2);
    targetY = padding + Math.random() * (window.innerHeight - padding * 2);
    speed = Math.random() * 1.5 + 1.8;
  }

  // Click on screen to attract the spider
  window.addEventListener('click', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    speed = 4.0; // Fast sprint when user clicks
  });

  setRandomTarget();
  updateBugPosition();
}

// 2. HIGH-PERFORMANCE CYBER NETWORK MESH BACKGROUND ANIMATION
const canvas = document.getElementById('cyber-bg');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const particleCount = Math.floor(Math.min(window.innerWidth / 15, 80));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw Subtle Cyber Network Grid
    ctx.strokeStyle = 'rgba(0, 255, 102, 0.03)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Connect Nearby Nodes
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#00ff66';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#00ff66';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 255, 102, ${1 - dist / 130})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// 3. MOBILE NAVIGATION MENU TOGGLE
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

// 4. SMOOTH SCROLL FOR NAVBAR LINKS
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

// 5. PROJECT MODALS DATA & EVENT HANDLERS
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
