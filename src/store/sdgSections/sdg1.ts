import { SDGSection } from "@/types/evaluation";

export const sdg1Section: SDGSection = {
  id: "SDG1",
  name: "No Poverty",
  indicators: [
    {
      id: "I1",
      name: "Environmental Policy",
      description:
        "Assessment of institutional environmental policies and their implementation",
      weight: 0.784,
      value: 0,
      needsImprovement: false,
      category: "Environmental Management",
      threshold: 2.25,
      variables: [
        {
          id: "var1",
          name: "Policy Implementation",
          value: 0,
          possibleValues: [0, 0.25, 1],
        },
        {
          id: "var2",
          name: "Policy Documentation",
          value: 0,
          possibleValues: [0, 1],
        },
        {
          id: "var3",
          name: "Policy Review",
          value: 0,
          possibleValues: [0, 1],
        },
      ],
    },
    {
      id: "I2",
      name: "Sustainability Integration",
      description:
        "Level of sustainability integration in curriculum and operations",
      weight: 0.216,
      value: 0,
      needsImprovement: false,
      category: "Education",
      threshold: 2.25,
      variables: [
        {
          id: "var1",
          name: "Integration Level",
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
