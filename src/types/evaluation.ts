export interface IndicatorVariable {
  id: string;
  name: string;
  value: number;
  possibleValues: number[];
}

export interface RatioValues {
  reportingYear: {
    numerator: number;
    denominator: number;
  };
  assessmentYear: {
    numerator: number;
    denominator: number;
  };
}

export interface Indicator {
  id: string;
  name: string;
  description: string;
  weight: number;
  value: number;
  needsImprovement: boolean;
  category: string;
  threshold: number;
  split?: boolean;
  variables?: IndicatorVariable[];
  isRatio?: boolean;
  ratioValues?: RatioValues;
  weightedScore?: number;
}

export interface SDGSection {
  id: string;
  name: string;
  indicators: Indicator[];
}

export interface EvaluationData {
  indicators: Indicator[];
  totalScore: number;
  recommendations: string[];
  lastUpdated: string;
}
