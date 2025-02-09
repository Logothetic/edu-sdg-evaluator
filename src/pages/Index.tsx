
import { useState, useEffect } from "react";
import { EvaluationForm } from "@/components/EvaluationForm";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { sdgSections, calculateScore, getRecommendations } from "@/store/evaluationData";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SDGSection, Indicator } from "@/types/evaluation";

const Index = () => {
  const [evaluationData, setEvaluationData] = useState<{
    sections: SDGSection[];
    score: number;
    recommendations: string[];
  }>({
    sections: sdgSections,
    score: 0,
    recommendations: [],
  });

  const handleEvaluationSubmit = (updatedSections: SDGSection[]) => {
    const allIndicators = updatedSections.flatMap(section => section.indicators);
    const score = calculateScore(allIndicators);
    const recommendations = getRecommendations(allIndicators);

    setEvaluationData({
      sections: updatedSections,
      score,
      recommendations,
    });

    localStorage.setItem(
      "sdgEvaluation",
      JSON.stringify({
        sections: updatedSections,
        score,
        recommendations,
        lastUpdated: new Date().toISOString(),
      })
    );
  };

  useEffect(() => {
    const savedData = localStorage.getItem("sdgEvaluation");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setEvaluationData({
        sections: parsed.sections,
        score: parsed.score,
        recommendations: parsed.recommendations,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sdg-50 to-white">
      <div className="container mx-auto py-8 px-4 space-y-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-2">
            <GraduationCap className="h-8 w-8 text-sdg-500" />
            <h1 className="text-3xl font-bold text-sdg-900">
              SDG Educational Evaluation
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Evaluate your educational institution's performance against the Sustainable Development Goals (SDGs)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <section>
            <h2 className="text-2xl font-semibold text-sdg-900 mb-6">
              Evaluation Form
            </h2>
            <EvaluationForm
              sections={evaluationData.sections}
              onSubmit={handleEvaluationSubmit}
            />
          </section>

          {evaluationData.score > 0 && (
            <section>
              <h2 className="text-2xl font-semibold text-sdg-900 mb-6">
                Results & Recommendations
              </h2>
              <ResultsDisplay
                score={evaluationData.score}
                recommendations={evaluationData.recommendations}
                indicators={evaluationData.sections.flatMap(section => section.indicators)}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
