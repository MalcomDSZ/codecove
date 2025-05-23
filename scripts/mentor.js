// scripts/mentor.js

const hints = [
  "Loop conditions often cause infinite loops.",
  "Check if your iterator is incrementing.",
  "Try console.logging your loop variables.",
  "Off-by-one errors are common in for loops.",
  "Think about your loop's exit condition.",
  "Hint: Check if your loop exit condition is reachable."
];

export function provideHint() {
  const hintEl = document.getElementById("mentor-hint");
  const randomHint = hints[Math.floor(Math.random() * hints.length)];
  hintEl.textContent = `🧠 ${randomHint}`;
}
