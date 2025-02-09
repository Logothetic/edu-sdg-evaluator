import { Indicator } from "@/types/evaluation";

// Helper function to calculate sum of variables and their weighted value
const calculateVariableSum = (indicator: Indicator): number => {
  if (!indicator.variables) return 0;
  const sum = indicator.variables.reduce(
    (sum, variable) => sum + variable.value,
    0
  );
  indicator.value = sum; // Store unweighted sum
  indicator.weightedScore = sum * indicator.weight; // Store weighted sum
  return indicator.weightedScore;
};

// Helper function to calculate ratio changes between years
const calculateRatioChange = (
  indicator: Indicator,
  type: "normal" | "direct"
): number => {
  if (!indicator.ratioValues) return 0;

  const { reportingYear, assessmentYear } = indicator.ratioValues;

  // Calculate ratios for both years
  const pc1 =
    reportingYear.denominator !== 0
      ? reportingYear.numerator / reportingYear.denominator
      : 0;

  const pc2 =
    assessmentYear.denominator !== 0
      ? assessmentYear.numerator / assessmentYear.denominator
      : 0;

  // Calculate change ratio
  if (pc1 === 0) return 0;
  const changeRatio = pc2 / pc1;

  let score = 0;
  if (type === "normal") {
    // For I3, I13, I17, I24 (inverse relationship - lower is better)
    // If ratio decreased (changeRatio < 1), it's good
    score = changeRatio >= 1 ? 0 : Math.min(3, (1 / changeRatio) * 2);
  } else {
    // For I8, I9, I18, I30 (direct relationship - higher is better)
    // If ratio increased (changeRatio > 1), it's good
    score = changeRatio <= 1 ? 0 : Math.min(3, changeRatio * 1.5);
  }

  indicator.value = score; // Store unweighted score
  indicator.weightedScore = score * indicator.weight; // Store weighted score
  return indicator.weightedScore;
};

// Calculate individual indicator score
const calculateIndicatorScore = (indicator: Indicator): number => {
  const { id } = indicator;

  // For variable-based indicators
  const variableBasedIds = [
    "I1",
    "I2",
    "I4",
    "I5",
    "I6",
    "I7",
    "I10",
    "I11",
    "I12",
    "I14",
    "I15",
    "I16",
    "I19",
    "I20",
    "I21",
    "I22",
    "I23",
    "I26",
    "I27",
    "I29",
    "I31",
    "I32",
    "I33",
    "I34",
  ];

  if (variableBasedIds.includes(id)) {
    return calculateVariableSum(indicator);
  }

  // For ratio-based indicators
  const normalRatioIds = ["I3", "I13", "I17", "I24"];
  const directRatioIds = ["I8", "I9", "I18", "I30"];

  if (normalRatioIds.includes(id)) {
    return calculateRatioChange(indicator, "normal");
  }

  if (directRatioIds.includes(id)) {
    return calculateRatioChange(indicator, "direct");
  }

  return 0;
};

// Calculate total score
export const calculateScore = (indicators: Indicator[]): number => {
  const totalScore = indicators.reduce((sum, indicator) => {
    calculateIndicatorScore(indicator); // Calculate both scores
    return sum + (indicator.weightedScore || 0); // Use weighted score for total
  }, 0);

  // Round to 2 decimal places
  return Math.round(totalScore * 100) / 100;
};

// Generate recommendations based on scores
export const getRecommendations = (indicators: Indicator[]): string[] => {
  const recommendations: string[] = [];

  indicators.forEach((indicator) => {
    if (indicator.value < indicator.threshold) {
      recommendations.push(
        `Improve ${indicator.name} (${
          indicator.id
        }): Current performance (${indicator.value.toFixed(
          2
        )}) is below target threshold (${indicator.threshold}). ${
          indicator.variables
            ? "Consider enhancing implementation, documentation, and review processes."
            : "Consider improving the ratio between reporting and assessment year values."
        }`
      );
    }
  });

  return recommendations;
};

const handleRatioChange = (
  sectionId: string,
  indicatorId: string,
  year: "reportingYear" | "assessmentYear",
  field: "numerator" | "denominator",
  value: string
) => {
  setFormData((prev) =>
    prev.map((section) => {
      if (section.id !== sectionId) return section;

      return {
        ...section,
        indicators: section.indicators.map((ind) => {
          if (ind.id !== indicatorId) return ind;

          const defaultRatioValues = {
            reportingYear: { numerator: null, denominator: null },
            assessmentYear: { numerator: null, denominator: null },
          };

          return {
            ...ind,
            ratioValues: {
              ...defaultRatioValues,
              ...ind.ratioValues,
              [year]: {
                ...defaultRatioValues[year],
                ...ind.ratioValues?.[year],
                [field]: value === "" ? null : parseFloat(value),
              },
            },
            needsImprovement: false,
          };
        }),
      };
    })
  );
};
