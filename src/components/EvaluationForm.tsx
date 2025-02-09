import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Indicator, SDGSection } from "@/types/evaluation";
import { motion } from "framer-motion";
import { ChevronRight, Save } from "lucide-react";

interface EvaluationFormProps {
  sections: SDGSection[];
  onSubmit: (sections: SDGSection[]) => void;
}

const getRatioLabels = (
  indicatorId: string
): { numeratorLabel: string; denominatorLabel: string } => {
  switch (indicatorId) {
    case "I3":
      return {
        numeratorLabel: "Kilos",
        denominatorLabel: "Number of People",
      };
    case "I8":
      return {
        numeratorLabel: "Number of First Years",
        denominatorLabel: "Number of Graduates",
      };
    case "I9":
      return {
        numeratorLabel: "Number of Female Senior Academic Staff",
        denominatorLabel: "Number of Senior Academic Staff",
      };
    case "I13":
      return {
        numeratorLabel: "Amount of Water (cubic meters)",
        denominatorLabel: "Population of Campus",
      };
    case "I17":
      return {
        numeratorLabel: "Total Energy Used (Gigajoule)",
        denominatorLabel: "Floor Space (square metre)",
      };
    case "I18":
      return {
        numeratorLabel: "Research Income",
        denominatorLabel: "Number of Academic Staff",
      };
    case "I24":
      return {
        numeratorLabel: "Amount of Waste Recycled",
        denominatorLabel: "Amount of Waste Generated",
      };
    case "I30":
      return {
        numeratorLabel: "Number of Publications",
        denominatorLabel: "Number of Academic Staff",
      };
    default:
      return {
        numeratorLabel: "Amount",
        denominatorLabel: "Total",
      };
  }
};

export const EvaluationForm = ({ sections, onSubmit }: EvaluationFormProps) => {
  const [formData, setFormData] = useState<SDGSection[]>(sections);
  const { toast } = useToast();

  const handleVariableChange = (
    sectionId: string,
    indicatorId: string,
    variableId: string,
    value: number
  ) => {
    setFormData((prev) =>
      prev.map((section) => {
        if (section.id !== sectionId) return section;

        return {
          ...section,
          indicators: section.indicators.map((ind) => {
            if (ind.id !== indicatorId) return ind;

            return {
              ...ind,
              variables: ind.variables?.map((v) =>
                v.id === variableId ? { ...v, value } : v
              ),
              needsImprovement: false, // Update this based on your threshold logic
            };
          }),
        };
      })
    );
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    toast({
      title: "Evaluation Saved",
      description: "Your evaluation data has been successfully saved.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {formData.map((section, sectionIndex) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-sdg-900">
            {section.name} - {section.id}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.indicators.map((indicator, index) => (
              <Card
                key={indicator.id}
                className="p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-sdg-500" />
                    <Label className="font-medium">
                      {indicator.name} - {indicator.id}
                    </Label>
                  </div>
                  <p className="text-sm text-gray-500">
                    {indicator.description}
                  </p>

                  {indicator.variables ? (
                    <div className="space-y-4">
                      {indicator.variables.map((variable) => (
                        <div key={variable.id} className="space-y-2">
                          <Label>{variable.name}</Label>
                          <RadioGroup
                            value={variable.value.toString()}
                            onValueChange={(value) =>
                              handleVariableChange(
                                section.id,
                                indicator.id,
                                variable.id,
                                parseFloat(value)
                              )
                            }
                            className="flex space-x-4"
                          >
                            {variable.possibleValues.map((val) => (
                              <div
                                key={val}
                                className="flex items-center space-x-2"
                              >
                                <RadioGroupItem
                                  value={val.toString()}
                                  id={`${variable.id}-${val}`}
                                />
                                <Label htmlFor={`${variable.id}-${val}`}>
                                  {val}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {indicator.isRatio && (
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-medium">Reporting Year</h4>
                            <div className="space-y-2">
                              <Label>
                                {getRatioLabels(indicator.id).numeratorLabel}
                              </Label>
                              <Input
                                type="number"
                                value={
                                  indicator.ratioValues?.reportingYear
                                    ?.numerator ?? ""
                                }
                                onChange={(e) =>
                                  handleRatioChange(
                                    section.id,
                                    indicator.id,
                                    "reportingYear",
                                    "numerator",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>
                                {getRatioLabels(indicator.id).denominatorLabel}
                              </Label>
                              <Input
                                type="number"
                                value={
                                  indicator.ratioValues?.reportingYear
                                    .denominator || ""
                                }
                                onChange={(e) =>
                                  handleRatioChange(
                                    section.id,
                                    indicator.id,
                                    "reportingYear",
                                    "denominator",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-medium">Assessment Year</h4>
                            <div className="space-y-2">
                              <Label>
                                {getRatioLabels(indicator.id).numeratorLabel}
                              </Label>
                              <Input
                                type="number"
                                value={
                                  indicator.ratioValues?.assessmentYear
                                    .numerator || ""
                                }
                                onChange={(e) =>
                                  handleRatioChange(
                                    section.id,
                                    indicator.id,
                                    "assessmentYear",
                                    "numerator",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>
                                {getRatioLabels(indicator.id).denominatorLabel}
                              </Label>
                              <Input
                                type="number"
                                value={
                                  indicator.ratioValues?.assessmentYear
                                    .denominator || ""
                                }
                                onChange={(e) =>
                                  handleRatioChange(
                                    section.id,
                                    indicator.id,
                                    "assessmentYear",
                                    "denominator",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      ))}
      <div className="flex justify-end">
        <Button type="submit" className="bg-sdg-500 hover:bg-sdg-600">
          <Save className="mr-2 h-4 w-4" />
          Save Evaluation
        </Button>
      </div>
    </form>
  );
};
