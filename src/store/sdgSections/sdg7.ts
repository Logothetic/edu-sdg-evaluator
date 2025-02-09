import { SDGSection } from "@/types/evaluation";

export const sdg7Section: SDGSection = {
  id: "SDG7",
  name: "Affordable and Clean Energy",
  indicators: [
    {
      id: "I15",
      name: "Energy Conservation Measures",
      description: "Assessment of energy conservation practices",
      weight: 0.58,
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
      id: "I16",
      name: "Renewable Energy Usage",
      description: "Evaluation of renewable energy implementation",
      weight: 0.264,
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
      id: "I17",
      name: "Energy Efficiency",
      description: "Measurement of energy efficiency per building area",
      weight: 0.176,
      value: 0,
      needsImprovement: false,
      category: "Operations",
      threshold: 2.25,
      isRatio: true,
      numerator: 0, // Total energy used in Gigajoule (GJ)
      denominator: 0, // Floor space of university buildings in square metre (m2)
    },
  ],
};
