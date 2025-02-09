import { SDGSection } from "@/types/evaluation";

export const sdg10Section: SDGSection = {
  id: "SDG10",
  name: "Reduced Inequalities",
  indicators: [
    {
      id: "I19",
      name: "Equality Measures",
      description: "Assessment of equality and anti-discrimination measures",
      weight: 1,
      value: 0,
      needsImprovement: false,
      category: "Equality",
      threshold: 2.25,
      variables: [
        {
          id: "var1",
          name: "Implementation Level",
          value: 0,
          possibleValues: [0, 1],
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
  ],
};
