onload = () => {
  const frontendProjects = document.getElementById("frontend-projects");
  frontendProjects.style.display = "flex";
  backend.classList.remove("active");
  frontend.classList.add("active");
  tools.classList.remove("active");
  others.classList.remove("active");

  const othersProjects = document.getElementById("others-projects");
  othersProjects.style.display = "none";

  const backendProjects = document.getElementById("backend-projects");
  backendProjects.style.display = "none";

  const toolsProjects = document.getElementById("tools-projects");
  toolsProjects.style.display = "none";

  // Mobile menu functionality
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll("#nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
};

const backend = document.getElementById("backend");

backend.onclick = () => {
  const frontendProjects = document.getElementById("frontend-projects");
  frontendProjects.style.display = "none";

  const othersProjects = document.getElementById("others-projects");
  othersProjects.style.display = "none";

  const backendProjects = document.getElementById("backend-projects");
  backendProjects.style.display = "flex";

  backend.classList.add("active");
  frontend.classList.remove("active");
  tools.classList.remove("active");
  others.classList.remove("active");

  const toolsProjects = document.getElementById("tools-projects");
  toolsProjects.style.display = "none";
};

const frontend = document.getElementById("frontend");

frontend.onclick = () => {
  const frontendProjects = document.getElementById("frontend-projects");
  frontendProjects.style.display = "flex";

  backend.classList.remove("active");
  frontend.classList.add("active");
  tools.classList.remove("active");
  others.classList.remove("active");

  const othersProjects = document.getElementById("others-projects");
  othersProjects.style.display = "none";

  const backendProjects = document.getElementById("backend-projects");
  backendProjects.style.display = "none";

  const toolsProjects = document.getElementById("tools-projects");
  toolsProjects.style.display = "none";
};

const tools = document.getElementById("tools");

tools.onclick = () => {
  const frontendProjects = document.getElementById("frontend-projects");
  frontendProjects.style.display = "none";

  const othersProjects = document.getElementById("others-projects");
  othersProjects.style.display = "none";

  const backendProjects = document.getElementById("backend-projects");
  backendProjects.style.display = "none";

  const toolsProjects = document.getElementById("tools-projects");
  toolsProjects.style.display = "flex";

  backend.classList.remove("active");
  frontend.classList.remove("active");
  tools.classList.add("active");
  others.classList.remove("active");
};

const others = document.getElementById("others");

others.onclick = () => {
  const frontendProjects = document.getElementById("frontend-projects");
  frontendProjects.style.display = "none";

  const othersProjects = document.getElementById("others-projects");
  othersProjects.style.display = "flex";

  backend.classList.remove("active");
  frontend.classList.remove("active");
  tools.classList.remove("active");
  others.classList.add("active");

  const backendProjects = document.getElementById("backend-projects");
  backendProjects.style.display = "none";

  const toolsProjects = document.getElementById("tools-projects");
  toolsProjects.style.display = "none";
};

const upbtn = document.getElementById("upbtn");
onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    upbtn.style.visibility = "visible";
  } else {
    upbtn.style.visibility = "hidden";
  };
};
upbtn.onclick = () => {
  window.scrollTo(0, 0);
};
