import { SDGSection } from "@/types/evaluation";

export const sdg4Section: SDGSection = {
  id: "SDG4",
  name: "Quality Education",
  indicators: [
    {
      id: "I7",
      name: "Educational Quality",
      description: "Assessment of educational quality measures",
      weight: 0.701,
      value: 0,
      needsImprovement: false,
      category: "Education",
      threshold: 2.25,
      variables: [
        {
          id: "var1",
          name: "Implementation Level",
          value: 0,
          possibleValues: [0, 0.25, 1],
        },
        {
          id: "var2",
          name: "Documentation",
          value: 0,
          possibleValues: [0, 1],
        },
        {
          id: "var3",
          name: "Review Process",
          value: 0,
          possibleValues: [0, 1],
        },
      ],
    },
    {
      id: "I8",
      name: "Student Progress",
      description: "Evaluation of student progression",
      weight: 0.299,
      value: 0,
      needsImprovement: false,
      category: "Education",
      threshold: 2.25,
      isRatio: true,
      numerator: 0,
      denominator: 0,
    },
  ],
};
