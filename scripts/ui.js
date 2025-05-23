// scripts/ui.js

export function showPopup(message, type = "info") {
  const popup = document.createElement("div");
  popup.className = `popup-message ${type}`;
  popup.textContent = message;
  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("visible"), 100);
  setTimeout(() => {
    popup.classList.remove("visible");
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}
