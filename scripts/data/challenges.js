// scripts/data/challenges.js

export const challenges = [
  {
    id: 1,
    title: "Fix the Loop",
    description: "Solve a bug in a JavaScript loop within 5 minutes.",
    hint: "Check if your loop exit condition is reachable.",
    starterCode: `function loopFix() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}`,
    solution: `function loopFix() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}`
  }
];
