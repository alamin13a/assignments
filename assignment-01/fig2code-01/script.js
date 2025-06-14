const btn = document.querySelector(".btn");
const menu = document.querySelector(".main-nav");
btn.addEventListener("click", () => {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
