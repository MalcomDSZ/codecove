// scripts/ui.js

import { getCurrentChallenge } from './challenge.js';
import { showHint } from './mentor.js';
import { showToast } from './toast.js';

export function updateUI() {
  const startBTN = document.getElementById("start-btn");

  if (startBTN) {
    startBTN.addEventListener("click", () => {
      const challenge = getCurrentChallenge();
      if (challenge) {
        // Inject starter code into Monaco Editor
        if (window.editor) {
          window.editor.setValue(challenge.starterCode);
        }

        // Show hint and toast
        showHint(challenge.hint);
        showToast(`🎯 ${challenge.title} started!`, 'info');

        // Update the challenge message above the button
        const challengeCard = document.getElementById("daily-challenge");
        const description = challengeCard.querySelector("p");
        if (description) {
          description.textContent = challenge.description;
        }
      }
    });
  }
}
