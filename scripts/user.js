// scripts/user.js

export function initAgentProfile() {
  const storedName = localStorage.getItem("agentName");
  const userDisplay = document.getElementById("user-display");

  if (storedName) {
    userDisplay.textContent = `👤 ${storedName}`;
  } else {
    const agentName = prompt("Enter your Agent name:", "Agent_X") || "Agent_X";
    localStorage.setItem("agentName", agentName);
    userDisplay.textContent = `👤 ${agentName}`;
  }
}
