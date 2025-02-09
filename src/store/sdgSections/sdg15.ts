import { SDGSection } from "@/types/evaluation";

export const sdg15Section: SDGSection = {
  id: "SDG15",
  name: "Life on Land",
  indicators: [
    {
      id: "I28",
      name: "Biodiversity Protection",
      description:
        "Assessment of biodiversity and ecosystem protection measures",
      weight: 1,
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
