// scripts/app.js

import { initEditor } from './editor.js';
import { setupChallenge, validateChallenge } from './challenge.js';
import { provideHint } from './mentor.js';
import { initAgentProfile } from './user.js';
import { updateXPDisplay } from './xp.js';
import { showPopup } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
  initAgentProfile();
  updateXPDisplay();
  initEditor();
  provideHint();

  const startBTN = document.getElementById("start-btn");
  const submitBTN = document.getElementById("submit-btn");

  if (startBTN) {
    startBTN.addEventListener("click", () => {
      setupChallenge();
      showPopup("🎯 Challenge started! Get typing, Agent!", "info");
    });
  }

  if (submitBTN) {
    submitBTN.addEventListener("click", () => {
      validateChallenge();
    });
  }
});
