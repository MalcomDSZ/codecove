// scripts/app.js

import { initEditor, loadChallengeInEditor } from './editor.js';
import { setupChallenge, getCurrentChallenge } from './challenge.js';
import { showHint } from './mentor.js';
import { updateUI } from './ui.js';
import { initAgentProfile } from './user.js';
import { updateXPDisplay, addXP } from './xp.js';
import { showToast } from './toast.js';

document.addEventListener("DOMContentLoaded", () => {
  initAgentProfile();
  updateXPDisplay();
  initEditor();
  setupChallenge();
  showHint("Press start to get your first mission.");
  updateUI();

  const startBTN = document.getElementById("start-btn");
  const submitBTN = document.getElementById("submit-btn");

  if (startBTN) {
    startBTN.addEventListener("click", () => {
      const challenge = getCurrentChallenge();
      if (challenge) {
        loadChallengeInEditor(challenge.starterCode);
        showHint(challenge.hint);
        showToast(`🎯 ${challenge.title} started! Code like the wind, Agent!`, 'info');
      } else {
        showToast("⚠️ No challenge found. Please try again.", 'error');
      }
    });
  }

  if (submitBTN) {
    submitBTN.addEventListener("click", () => {
      const userCode = window.editor.getValue();
      const challenge = getCurrentChallenge();

      if (!userCode.trim()) {
        showToast("❌ Please enter your code first.", 'error');
        return;
      }

      if (!challenge) {
        showToast("⚠️ No challenge loaded. Please click Start first.", 'error');
        return;
      }

      if (userCode.trim() === challenge.solution.trim()) {
        showToast("✅ Correct! Mission accomplished.", 'success');
        addXP(50);
      } else {
        showToast("❌ Incorrect solution. Try again.", 'error');
      }
    });
  }
});
