// scripts/app.js

import { initEditor, loadChallengeInEditor } from "./editor.js";
import {
  setupChallenge,
  getCurrentChallenge,
  loadNextChallenge,
} from "./challenge.js";
import { showHint } from "./mentor.js";
import { updateUI } from "./ui.js";
import { initAgentProfile } from "./user.js";
import { updateXPDisplay, addXP } from "./xp.js";
import { showToast } from "./toast.js";

let challengeCompleted = false;

document.addEventListener("DOMContentLoaded", () => {
  initAgentProfile();
  updateXPDisplay();
  initEditor();
  setupChallenge();
  showHint("Press start to get your first mission.");
  updateUI();
  showToast("👋 Welcome Agent! Ready for action?", "info");

  const startBTN = document.getElementById("start-btn");
  const submitBTN = document.getElementById("submit-btn");

  if (startBTN) {
    startBTN.addEventListener("click", () => {
      const challenge = loadNextChallenge();
      if (challenge) {
        loadChallengeInEditor(challenge.starterCode);
        showHint(challenge.hint);
        showToast(
          `🎯 ${challenge.title} started! Code like the wind, Agent!`,
          "info",
        );
        challengeCompleted = false;
      } else {
        showToast("⚠️ No more challenges available right now.", "warning");
      }
    });
  }

  if (submitBTN) {
    submitBTN.addEventListener("click", () => {
      const userCode = window.editor.getValue();
      const challenge = getCurrentChallenge();

      if (!challenge) {
        showToast("❌ No active challenge. Press Start first!", "error");
        return;
      }

      if (challengeCompleted) {
        showToast("⚠️ You've already completed this challenge.", "info");
        return;
      }

      if (!userCode.trim()) {
        showToast("❌ Please enter your code first.", "error");
        return;
      }

      try {
        // Safely create a user function and execute it
        const userFunction = new Function(userCode + "; return null;");
        userFunction();

        const testPassed = challenge.test();
        if (testPassed) {
          showToast("✅ Correct! Mission accomplished.", "success");
          addXP(50);
          challengeCompleted = true;
        } else {
          showToast("❌ Incorrect result. Try again.", "error");
        }
      } catch (error) {
        showToast(`❌ Error: ${error.message}`, "error");
      }
    });
  }
});
