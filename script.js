const btn = document.getElementById("secretbutton");
const secret = document.getElementById("secret");

btn.addEventListener("click", () => {
  if (secret.style.display === "none") {
    secret.style.display = "block";
  } else {
    secret.style.display = "none";
  }
});
