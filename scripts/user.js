// scripts/user.js

export function initAgentProfile() {
  let agentName = localStorage.getItem("agentName");

  if (!agentName) {
    agentName = prompt("Welcome Agent. Enter your code name:");
    if (!agentName) agentName = "Agent_X";
    localStorage.setItem("agentName", agentName);
  }

  const display = document.getElementById("user-display");
  if (display) display.textContent = `👤 ${agentName}`;
}
