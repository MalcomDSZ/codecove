document.addEventListener("DOMContentLoaded", () => {
  const xpBar = document.getElementById('xp-bar');
  const mentorHint = document.getElementById('mentor-hint');
  const startButton = document.getElementById('start-btn');

  let userXP = 320;
  const xpGoal = 500;

  startButton.addEventListener('click', () => {
    simulateChallengeResult();
  });

  function simulateChallengeResult() {
    const gainedXP = Math.floor(Math.random() * 80) + 20;
    userXP += gainedXP;
    if (userXP >= xpGoal) {
      userXP = xpGoal;
      alert('🎉 Level up! You’ve reached the XP goal!');
    } else {
      alert(`✅ Challenge completed! +${gainedXP} XP`);
    }
    updateXPDisplay();
    giveHint();
  }

  function updateXPDisplay() {
    xpBar.textContent = `🌟 XP: ${userXP} / ${xpGoal}`;
  }

  function giveHint() {
    const hints = [
      'Hint: Watch your loop boundaries.',
      'Hint: Think recursion vs iteration.',
      'Hint: Keep functions small and focused.',
      'Hint: Off-by-one errors are common.',
      'Hint: Use console.log to debug your loop.'
    ];
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    mentorHint.textContent = `🧠 ${randomHint}`;
  }
});
