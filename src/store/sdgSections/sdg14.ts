import { SDGSection } from "@/types/evaluation";

export const sdg14Section: SDGSection = {
  id: "SDG14",
  name: "Life Below Water",
  indicators: [
    {
      id: "I27",
      name: "Water Conservation",
      description: "Assessment of water conservation and protection measures",
      weight: 0.24,
      value: 0,
      needsImprovement: false,
      category: "Environment",
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
