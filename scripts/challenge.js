// scripts/challenge.js

import { addXP } from './xp.js';
import { showPopup } from './ui.js';

let currentChallenge = null;

export function setupChallenge() {
  currentChallenge = {
    id: 'loop-fix',
    title: 'Fix the Loop',
    starterCode: `function loopFix() {
  // Fix the loop to count from 0 to 9
  for (let i = 0; i < ; i++) {
    console.log(i);
  }
}
loopFix();`,
    test: () => {
      const output = [];
      const originalLog = console.log;
      console.log = (msg) => output.push(msg);

      try {
        new Function(window.editor.getValue())();
      } catch (err) {
        console.log = originalLog;
        return { passed: false, error: err.message };
      }

      console.log = originalLog;
      const expected = Array.from({ length: 10 }, (_, i) => i);
      const passed = JSON.stringify(output) === JSON.stringify(expected);
      return { passed, output, expected };
    }
  };

  if (window.editor && currentChallenge.starterCode) {
    window.editor.setValue(currentChallenge.starterCode);
  }
}

export function validateChallenge() {
  if (!currentChallenge) {
    showPopup("❌ No challenge loaded. Click 'Start Challenge' first!", "error");
    return;
  }

  const result = currentChallenge.test();

  if (result.error) {
    showPopup(`❌ Error: ${result.error}`, "error");
  } else if (result.passed) {
    addXP(50);
    showPopup("✅ Mission Accomplished. You fixed the loop!", "success");
  } else {
    showPopup(`⚠️ Output mismatch.\nExpected: ${result.expected.join(', ')}\nGot: ${result.output.join(', ')}`, "error");
  }
}
