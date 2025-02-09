import { SDGSection } from "@/types/evaluation";

export const sdg11Section: SDGSection = {
  id: "SDG11",
  name: "Sustainable Cities and Communities",
  indicators: [
    {
      id: "I20",
      name: "Sustainable Infrastructure",
      description: "Assessment of sustainable infrastructure and facilities",
      weight: 0.465,
      value: 0,
      needsImprovement: false,
      category: "Infrastructure",
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
      id: "I21",
      name: "Community Engagement",
      description: "Evaluation of community engagement initiatives",
      weight: 0.535,
      value: 0,
      needsImprovement: false,
      category: "Community",
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
