// scripts/mentor.js

export function showHint(hint) {
  const hintBox = document.getElementById("mentor-hint");
  if (hintBox) {
    hintBox.textContent = `💡 Hint: ${hint}`;
  }
}
