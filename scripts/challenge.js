// scripts/challenge.js

import { challenges } from './data/challenges.js';
import { loadChallengeInEditor } from './editor.js';
import { showHint } from './mentor.js';

let currentChallengeIndex = 0;

export function setupChallenge() {
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
}

export function getCurrentChallenge() {
  return challenges[currentChallengeIndex];
}
