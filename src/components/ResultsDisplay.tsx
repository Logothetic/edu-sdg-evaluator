import { Card } from "@/components/ui/card";
import { Indicator } from "@/types/evaluation";
import { ScoreVisualization } from "./ScoreVisualization";
import { ScoreGraph } from "./ScoreGraph";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle } from "lucide-react";

interface ResultsDisplayProps {
  score: number;
  recommendations: string[];
  indicators: Indicator[];
}

export const ResultsDisplay = ({
  score,
  recommendations,
  indicators,
}: ResultsDisplayProps) => {
  const needsImprovementCount = indicators.filter(
    (ind) => (ind.value || 0) < ind.threshold
  ).length;

  return (
    <div className="space-y-6">
      <ScoreVisualization score={score} />

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Performance by Indicator</h3>
        <ScoreGraph indicators={indicators} />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Performance Summary</h3>
          <div className="space-y-4">
            <Alert
              variant={needsImprovementCount > 0 ? "destructive" : "default"}
            >
              <div className="flex items-center gap-2">
                {needsImprovementCount > 0 ? (
                  <AlertTriangle className="h-5 w-5" />
                ) : (
                  <CheckCircle className="h-5 w-5" />
                )}
                <AlertTitle>
                  {needsImprovementCount > 0
                    ? `${needsImprovementCount} Areas Need Improvement`
                    : "All Areas Meeting Targets"}
                </AlertTitle>
              </div>
              <AlertDescription>
                {needsImprovementCount > 0
                  ? "Some indicators are below their target thresholds."
                  : "Great job! All indicators are meeting their targets."}
              </AlertDescription>
            </Alert>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
          <div className="space-y-2">
            {recommendations.length > 0 ? (
              recommendations.map((rec, index) => (
                <Alert key={index}>
                  <AlertDescription>{rec}</AlertDescription>
                </Alert>
              ))
            ) : (
              <Alert>
                <AlertDescription>
                  No specific recommendations at this time. Keep maintaining the
                  current performance levels.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
