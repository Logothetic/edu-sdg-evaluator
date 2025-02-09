import { SDGSection } from "@/types/evaluation";

export const sdg9Section: SDGSection = {
  id: "SDG9",
  name: "Industry, Innovation and Infrastructure",
  indicators: [
    {
      id: "I18",
      name: "Research Productivity",
      description: "Research income per academic staff",
      weight: 1,
      value: 0,
      needsImprovement: false,
      category: "Research",
      threshold: 2.25,
      isRatio: true,
      numerator: 0, // Research income
      denominator: 0, // Number of academic staff
    },
  ],
};
