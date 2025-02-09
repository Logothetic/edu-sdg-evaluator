import { SDGSection } from "@/types/evaluation";

export const sdg16Section: SDGSection = {
  id: "SDG16",
  name: "Peace, Justice and Strong Institutions",
  indicators: [
    {
      id: "I29",
      name: "Institutional Governance",
      description:
        "Assessment of institutional governance and transparency measures",
      weight: 1,
      value: 0,
      needsImprovement: false,
      category: "Governance",
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
