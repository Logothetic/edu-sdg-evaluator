import { SDGSection } from "@/types/evaluation";

export const sdg3Section: SDGSection = {
  id: "SDG3",
  name: "Good Health and Well-being",
  indicators: [
    {
      id: "I5",
      name: "Health and Safety",
      description: "Assessment of health and safety measures",
      weight: 0.663,
      value: 0,
      needsImprovement: false,
      category: "Well-being",
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
      id: "I6",
      name: "Well-being Programs",
      description: "Evaluation of well-being initiatives",
      weight: 0.337,
      value: 0,
      needsImprovement: false,
      category: "Well-being",
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
