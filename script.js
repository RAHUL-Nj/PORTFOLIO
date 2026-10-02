
// Cyber background layer
(function initCyberBackground(){
  const layer = document.createElement("div");
  layer.className = "cyber-particles";
  for(let i=0;i<42;i++){
    const p = document.createElement("span");
    p.className = "cyber-particle";
    p.style.left = `${Math.random()*100}%`;
    p.style.animationDuration = `${10 + Math.random()*18}s`;
    p.style.animationDelay = `${-Math.random()*22}s`;
    p.style.transform = `scale(${0.5 + Math.random()*1.8})`;
    layer.appendChild(p);
  }
  document.body.prepend(layer);

  const radar = document.createElement("div");
  radar.className = "cyber-radar";
  document.body.prepend(radar);

  let raf = null;
  window.addEventListener("mousemove", (e) => {
    if(raf) return;
    raf = requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
      raf = null;
    });
  }, {passive:true});
})();

const projectData = {
  sniffer: {
    kicker: "01 / NETWORK SECURITY",
    title: "Advanced Network Packet Sniffer",
    intro: "A Python-based network traffic tool built to capture, filter, monitor and analyse packets on a specified network interface.",
    details: [
      ["Why I built it", "To build practical understanding of how network traffic can be captured and inspected programmatically."],
      ["Objective", "Create a usable packet-sniffing utility for observing and analysing traffic on a selected interface."],
      ["Tools / technologies", "Python, Scapy, network-security concepts"],
      ["Skills developed", "Packet capture, traffic filtering, network analysis, Python scripting"]
    ],
    sections: [
      ["What I actually did", "Developed a tool that captures network traffic, supports filtering, monitors packets and provides traffic-analysis functionality on a specified interface."],
      ["Outcome", "A working security-focused Python project demonstrating practical packet-level network analysis."],
      ["Real-world relevance", "Packet inspection is useful for troubleshooting, network visibility, security monitoring and understanding suspicious or unexpected traffic."]
    ],
    evidence: ["GitHub repository", "Screenshots", "Technical documentation"]
  },
  blockchain: {
    kicker: "02 / CRYPTOGRAPHY",
    title: "Blockchain Cryptography Project",
    intro: "A simplified browser-based blockchain simulation created to make core blockchain and cryptographic mechanisms concrete and inspectable.",
    details: [
      ["Why I built it", "To understand the relationship between transactions, blocks, hashing, mining and digital signatures."],
      ["Objective", "Build a small simulation that demonstrates the major mechanisms behind a blockchain-style data structure."],
      ["Tools / technologies", "HTML, CSS, JavaScript"],
      ["Skills developed", "JavaScript development, hashing concepts, digital signatures, transaction and block modelling"]
    ],
    sections: [
      ["What I actually did", "Built a simplified simulation demonstrating transactions, block mining, hashing and digital signatures in a browser-based interface."],
      ["Outcome", "An interactive educational project that connects cryptographic concepts with a visible blockchain workflow."],
      ["Real-world relevance", "The project helps explain how integrity, transaction records and cryptographic primitives contribute to blockchain systems."]
    ],
    evidence: ["GitHub repository", "Screenshots", "Demo"]
  },
  phishing: {
    kicker: "03 / THREAT DETECTION",
    title: "Phishing Detection Tool",
    intro: "A web-based security tool designed to analyse email and SMS content for potential phishing indicators.",
    details: [
      ["Why I built it", "To explore how common phishing signals can be surfaced through a simple user-facing security tool."],
      ["Objective", "Analyse message content and highlight indicators that may warrant further investigation."],
      ["Tools / technologies", "HTML, CSS, JavaScript"],
      ["Skills developed", "Web development, security-oriented input analysis, threat-awareness logic and UI design"]
    ],
    sections: [
      ["What I actually did", "Developed a browser-based interface for analysing email/SMS content and identifying potential phishing indicators."],
      ["Outcome", "A practical security-awareness project demonstrating how detection logic can be presented to an end user."],
      ["Real-world relevance", "Phishing detection supports users and defenders in recognising suspicious communications before interacting with potentially malicious content."]
    ],
    evidence: ["GitHub repository", "Screenshots", "Demo"]
  }
};

const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const toast = document.getElementById("toast");

function openProject(key) {
  const p = projectData[key];
  if (!p) return;
  const detailBoxes = p.details.map(([label, value]) =>
    `<div class="detail-box"><label>${label}</label><p>${value}</p></div>`
  ).join("");
  const sections = p.sections.map(([title, text]) =>
    `<div class="modal-section"><h4>${title}</h4><p>${text}</p></div>`
  ).join("");
  const evidence = p.evidence.map(name =>
    `<span class="evidence-link">${name}<br><small>LINK PLACEHOLDER</small></span>`
  ).join("");

  modalContent.innerHTML = `
    <div class="modal-kicker">${p.kicker}</div>
    <h2 id="modalTitle">${p.title}</h2>
    <p class="modal-intro">${p.intro}</p>
    <div class="detail-grid">${detailBoxes}</div>
    ${sections}
    <div class="modal-section">
      <h4>Evidence</h4>
      <p>These evidence links were not supplied in the profile. Replace the placeholders with verified URLs before publishing.</p>
      <div class="evidence-grid">${evidence}</div>
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", e => {
    if (e.target.closest("button") || e.currentTarget) openProject(card.dataset.project);
  });
});

document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeProject));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeProject();
});

document.querySelectorAll(".evidence-placeholder").forEach(el => {
  el.addEventListener("click", e => {
    const message = el.dataset.placeholder || "Replace this placeholder with your real evidence URL.";
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3200);
    if (el.tagName === "A") e.preventDefault();
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();
