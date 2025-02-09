import { SDGSection } from "@/types/evaluation";

export const sdg17Section: SDGSection = {
  id: "SDG17",
  name: "Partnerships for the Goals",
  indicators: [
    {
      id: "I30",
      name: "Research Productivity",
      description: "Publications per academic staff",
      weight: 0.241,
      value: 0,
      needsImprovement: false,
      category: "Research",
      threshold: 2.25,
      isRatio: true,
      ratioValues: {
        reportingYear: {
          numerator: null,
          denominator: null,
        },
        assessmentYear: {
          numerator: null,
          denominator: null,
        },
      },
    },
    {
      id: "I31",
      name: "International Collaboration",
      description: "Assessment of international partnership initiatives",
      weight: 0.322,
      value: 0,
      needsImprovement: false,
      category: "Partnerships",
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
      id: "I32",
      name: "Local Partnerships",
      description: "Evaluation of local community partnerships",
      weight: 0.18,
      value: 0,
      needsImprovement: false,
      category: "Partnerships",
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
      id: "I33",
      name: "Educational Partnerships",
      description: "Assessment of educational collaboration initiatives",
      weight: 0.114,
      value: 0,
      needsImprovement: false,
      category: "Partnerships",
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
      id: "I34",
      name: "Sustainability Networks",
      description: "Participation in sustainability networks and initiatives",
      weight: 0.143,
      value: 0,
      needsImprovement: false,
      category: "Partnerships",
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
