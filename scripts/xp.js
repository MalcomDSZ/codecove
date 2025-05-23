// scripts/xp.js

let userXP = 0;
const xpTarget = 500;

export function addXP(points) {
  userXP += points;
  updateXPDisplay();
}

export function updateXPDisplay() {
  const xpBar = document.getElementById("xp-bar");
  if (xpBar) {
    xpBar.textContent = `🌟 XP: ${userXP} / ${xpTarget}`;
  }
}
