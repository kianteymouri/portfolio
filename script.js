const root = document.documentElement;
const themeButtons = document.querySelectorAll(".theme-toggle");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const roles = [
  "mechanical engineer.",
  "robotics engineer.",
  "product designer",
  "builder of electromechanical systems."
];

const typedRole = document.querySelector("#typed-role");

if (typedRole) {
  let roleIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function typeLoop() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      characterIndex += 1;
      typedRole.textContent = currentRole.slice(0, characterIndex);

      if (characterIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeLoop, 1200);
        return;
      }
    } else {
      characterIndex -= 1;
      typedRole.textContent = currentRole.slice(0, characterIndex);

      if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeLoop, deleting ? 34 : 64);
  }

  typeLoop();
}

const glow = document.querySelector(".grid-glow");
const doodles = [...document.querySelectorAll(".corner-doodle")];

document.addEventListener("pointermove", (event) => {
  if (glow) {
    glow.style.setProperty("--mouse-x", `${event.clientX}px`);
    glow.style.setProperty("--mouse-y", `${event.clientY}px`);
  }

  doodles.forEach((doodle) => {
    const rect = doodle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
    const radius = Math.max(230, rect.width * 1.05);
    doodle.style.opacity = Math.max(0, 1 - distance / radius);
  });
});
