export const challenges = [
  {
    id: "daily_01",
    title: "Fix the Loop",
    description: "Solve a bug in a JavaScript loop.",
    type: "daily",
    starterCode: "for(let i = 0; i < 10; i++) { console.log(i); }",
    solution: "for(let i = 0; i < 10; i++) { console.log(i); }",
    test: () => true,
    hint: "Look closely at the loop condition."
  },
  {
    id: "weekly_01",
    title: "Clean the Array",
    description: "Remove duplicates using Set.",
    type: "weekly",
    starterCode: "let nums = [1, 2, 2, 3];",
    solution: "let nums = [...new Set([1, 2, 2, 3])];",
    test: () => true,
    hint: "Try using Set to remove duplicates."
  }
  // Add more challenges later
];
