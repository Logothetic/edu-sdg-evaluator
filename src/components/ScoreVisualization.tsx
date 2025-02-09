import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface ScoreVisualizationProps {
  score: number;
}

const getScoreCategory = (
  score: number
): {
  category: string;
  color: string;
  description: string;
} => {
  if (score >= 2.5) {
    return {
      category: "Excellent",
      color: "bg-green-500",
      description: "Outstanding SDG integration across all areas",
    };
  } else if (score >= 2.25) {
    return {
      category: "Very Good",
      color: "bg-emerald-500",
      description: "Strong performance in most SDG criteria",
    };
  } else if (score >= 2.0) {
    return {
      category: "Good",
      color: "bg-blue-500",
      description: "Solid foundation with room for improvement",
    };
  } else if (score >= 1.75) {
    return {
      category: "Fair",
      color: "bg-yellow-500",
      description: "Meeting basic requirements, needs enhancement",
    };
  } else if (score >= 1.5) {
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

export const ScoreVisualization = ({ score }: ScoreVisualizationProps) => {
  const normalizedScore = (Math.min(Math.max(score, 0), 3) / 3) * 100;
  const { category, color, description } = getScoreCategory(score);

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
              <span className="text-4xl font-bold">
                {normalizedScore.toFixed(1)}
              </span>
              <span className="text-lg">/100</span>
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
          <div className="text-2xl font-bold text-gray-900">34</div>
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
