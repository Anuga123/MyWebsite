const developers = [
  {
    name: "Cyber Kavi",
    role: "Founder & Lead Developer",
    desc: "Full-stack dev focusing on bots, APIs, and secure systems.",
    img: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavi.jpeg",
    altImg: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/team.png"
  },
  {
    name: "Pathum Nimsara",
    role: "Helper",
    desc: "Helps with the bots and the APIs.",
    img: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/pathuma.jpeg",
    altImg: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/team.png"
  },
  {
    name: "Kaveesha Imesh",
    role: "Editor",
    desc: "Editor of CyberX Devs.",
    img: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kaveesha.jpeg",
    altImg: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/team.png"
  },
  {
    name: "ANUGA SENITHU( DEV ANUWH )",
    role: "Developer",
    desc: "Front-End developer.",
    img: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/anuga.jpeg",
    altImg: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/team.png"
  }
];

const projects = [
  {
    name: "KAVI-X MD Main Bot",
    desc: "Multi‑feature bot with AI, media tools & group moderation.",
    img: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/kavix02.jpeg",
    altImg: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/team.png"
  },
  {
    name: "KAVI-X MD Mini Bot",
    desc: "Scalable API to fetch & download YouTube videos without rate limits.",
    img: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/minibot.png",
    altImg: "https://raw.githubusercontent.com/KaviDeveloperSe/KAVI-X-BOT-DB/refs/heads/main/team.png"
  }
];

function createCard({ name, role, desc, img, altImg }) {
  return `
    <div class="card text-light">
      <img src="${img}" class="card-img-top primary-img" alt="${name}" />
      <img src="${altImg}" class="card-img-top alt-img" alt="${name} alternate" />
      <div class="card-body text-center">
        <h5 class="card-title">${name}</h5>
        <p class="card-text small details">${desc}</p>
      </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const teamContainer = document.getElementById('team-cards');
  developers.forEach(dev => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3 mb-4';
    col.innerHTML = createCard({ ...dev, role: dev.role });
    teamContainer.appendChild(col);
  });

  const projectContainer = document.getElementById('project-cards');
  projects.forEach(proj => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3 mb-4';
    col.innerHTML = createCard({ ...proj, role: '' });
    projectContainer.appendChild(col);
  });
});
