export const challenges = [
  {
    id: 1,
    title: "Fix the Loop",
    description: "The loop should count from 1 to 5. Fix it.",
    starterCode: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
    solution: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`,
    test: () => {
      const output = [];
      for (let i = 1; i <= 5; i++) {
        output.push(i);
      }
      return output.join(',');
    },
    hint: "Start from 1 and make sure your loop includes 5.",
  },
  // Add more challenges as needed
];
