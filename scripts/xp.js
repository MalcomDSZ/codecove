// scripts/xp.js

let xp = parseInt(localStorage.getItem("agentXP")) || 0;

export function addXP(amount) {
  xp += amount;
  localStorage.setItem("agentXP", xp);
  updateXPDisplay();
}

export function updateXPDisplay() {
  const xpBar = document.getElementById("xp-bar");
  if (xpBar) {
    xpBar.textContent = `🌟 XP: ${xp} / 500`;
  }
}
