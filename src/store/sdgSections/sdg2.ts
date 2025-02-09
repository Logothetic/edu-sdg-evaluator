import { SDGSection } from "@/types/evaluation";

export const sdg2Section: SDGSection = {
  id: "SDG2",
  name: "Zero Hunger",
  indicators: [
    {
      id: "I3",
      name: "Resource Efficiency",
      description: "Measurement of resource efficiency and consumption",
      weight: 0.58,
      value: 0,
      needsImprovement: false,
      category: "Operations",
      threshold: 2.25,
      isRatio: true,
      numerator: 0,
      denominator: 0,
    },
    {
      id: "I4",
      name: "Waste Management",
      description: "Assessment of waste management practices",
      weight: 0.42,
      value: 0,
      needsImprovement: false,
      category: "Operations",
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
  ],
};
