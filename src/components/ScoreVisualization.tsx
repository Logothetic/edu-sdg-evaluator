import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Indicator } from "@/types/evaluation";

interface ScoreVisualizationProps {
  score: number;
  indicators: Indicator[];
}

const getScoreCategory = (
  indicators: Indicator[]
): {
  category: string;
  color: string;
  description: string;
} => {
  const passingCount = indicators.filter(
    (ind) => (ind.value || 0) >= ind.threshold
  ).length;

  if (passingCount === indicators.length) {
    return {
      category: "Excellent",
      color: "bg-green-500",
      description: "Outstanding SDG integration across all areas",
    };
  } else if (passingCount >= 30) {
    return {
      category: "Very Good",
      color: "bg-emerald-500",
      description: "Strong performance in most SDG criteria",
    };
  } else if (passingCount >= 25) {
    return {
      category: "Good",
      color: "bg-blue-500",
      description: "Solid foundation with room for improvement",
    };
  } else if (passingCount >= 20) {
    return {
      category: "Fair",
      color: "bg-yellow-500",
      description: "Meeting basic requirements, needs enhancement",
    };
  } else if (passingCount >= 15) {
    return {
      category: "Needs Improvement",
      color: "bg-orange-500",
      description: "Significant areas require attention",
    };
  } else {
    return {
      category: "Critical",
      color: "bg-red-500",
      description: "Immediate action required across multiple areas",
    };
  }
};

export const ScoreVisualization = ({
  score,
  indicators,
}: ScoreVisualizationProps) => {
  const passingCount = indicators.filter(
    (ind) => (ind.value || 0) >= ind.threshold
  ).length;
  const normalizedScore = (passingCount / indicators.length) * 100;
  const { category, color, description } = getScoreCategory(indicators);

  return (
    <Card className="p-6 space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">
          SDG Performance Score
        </h3>
        <p className="text-gray-500">
          Overall institutional performance in SDG integration
        </p>
      </div>

      <div className="flex justify-center items-center space-x-8">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl font-bold">{passingCount}</span>
              <span className="text-lg">/{indicators.length}</span>
            </div>
          </div>
          <Progress
            value={normalizedScore}
            className={`h-40 w-40 rounded-full ${color} transition-all duration-500`}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xl font-semibold">{category}</div>
          <div className="text-gray-600">{description}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="font-semibold">Areas Assessed</div>
          <div className="text-2xl font-bold text-gray-900">17</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="font-semibold">Indicators</div>
          <div className="text-2xl font-bold text-gray-900">
            {indicators.length}
          </div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="font-semibold">Category</div>
          <div className={`text-lg font-bold ${color.replace("bg-", "text-")}`}>
            {category}
          </div>
        </div>
      </div>
    </Card>
  );
};
