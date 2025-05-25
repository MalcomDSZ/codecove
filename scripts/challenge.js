// scripts/challenge.js

import { challenges } from "./data/challenges.js";
import { loadChallengeInEditor } from "./editor.js";
import { showHint } from "./mentor.js";

let currentChallengeIndex = 0;

export function getCurrentChallenge() {
  return challenges[currentChallengeIndex];
}

export function setupChallenge() {
  const challenge = getCurrentChallenge();

// Update the challenge display UI
  const titleElem = document.getElementById("challenge-title");
  const descElem = document.getElementById("challenge-description");

  if (titleElem && descElem && challenge) {
    titleElem.textContent = challenge.title;
    descElem.textContent = challenge.description;
  }
}

  const startBTN = document.getElementById("start-btn");
  if (startBTN) {
    startBTN.addEventListener("click", () => {
      const challenge = challenges[currentChallengeIndex];
      if (challenge) {
        loadChallengeInEditor(challenge.starterCode);
        showHint(challenge.hint);
        const result = document.getElementById("submission-result");
        result.textContent = `🎯 ${challenge.title} started!`;
      }
    });
  }
  

export function getCurrentChallenge() {
  return challenges[currentChallengeIndex];
}

export function loadNextChallenge() {
  currentChallengeIndex = (currentChallengeIndex + 1) % challenges.length;
  return getCurrentChallenge();
}


export function loadChallengesByCategory(category, container) {
  container.innerHTML = '';
  const filtered = challenges.filter(ch => ch.type === category);
  
  filtered.forEach(challenge => {
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${challenge.title}</h3>
      <p>${challenge.description}</p>
      <button onclick="startChallenge('${challenge.id}')">Start</button>
    `;
    container.appendChild(card);
  });
}

window.startChallenge = (id) => {
  const challenge = challenges.find(c => c.id === id);
  if (!challenge) return;
  window.currentChallenge = challenge;
  window.editor.setValue(challenge.starterCode);
};
