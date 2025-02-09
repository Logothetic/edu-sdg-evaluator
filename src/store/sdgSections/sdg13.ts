import { SDGSection } from "@/types/evaluation";

export const sdg13Section: SDGSection = {
  id: "SDG13",
  name: "Climate Action",
  indicators: [
    {
      id: "I26",
      name: "Climate Action Initiatives",
      description: "Assessment of climate action and mitigation measures",
      weight: 0.411,
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
