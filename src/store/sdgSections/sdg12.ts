import { SDGSection } from "@/types/evaluation";

export const sdg12Section: SDGSection = {
  id: "SDG12",
  name: "Responsible Consumption and Production",
  indicators: [
    {
      id: "I22",
      name: "Sustainable Procurement",
      description: "Assessment of sustainable procurement practices",
      weight: 0.291,
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
    {
      id: "I23",
      name: "Waste Reduction Practices",
      description: "Evaluation of waste reduction initiatives",
      weight: 0.422,
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
    {
      id: "I24",
      name: "Waste Recycling Efficiency",
      description: "Measurement of waste recycling efficiency",
      weight: 0.226,
      value: 0,
      needsImprovement: false,
      category: "Operations",
      threshold: 2.25,
      isRatio: true,
      ratioValues: {
        reportingYear: {
          numerator: 0,
          denominator: 0,
        },
        assessmentYear: {
          numerator: 0,
          denominator: 0,
        },
      },
    },
  ],
};
