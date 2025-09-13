const btn = document.getElementById("secretbutton");
const secret = document.getElementById("secret");

btn.addEventListener("click", () => {
  if (secret.style.display === "none") {
    secret.style.display = "block";
  } else {
    secret.style.display = "none";
  }
});

const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text/icon depending on mode
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
