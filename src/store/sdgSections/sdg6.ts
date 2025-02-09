import { SDGSection } from "@/types/evaluation";

export const sdg6Section: SDGSection = {
  id: "SDG6",
  name: "Clean Water and Sanitation",
  indicators: [
    {
      id: "I13",
      name: "Water Usage Efficiency",
      description: "Assessment of water usage efficiency per capita",
      weight: 0.552,
      value: 0,
      needsImprovement: false,
      category: "Operations",
      threshold: 2.25,
      isRatio: true,
      numerator: 0, // amount of water in cubic meters
      denominator: 0, // population of campus
    },
    {
      id: "I14",
      name: "Water Management Practices",
      description: "Evaluation of water management and conservation practices",
      weight: 0.448,
      value: 0,
      needsImprovement: false,
      category: "Operations",
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
