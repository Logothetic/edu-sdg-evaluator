import { Indicator } from "@/types/evaluation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Cell,
} from "recharts";

interface ScoreGraphProps {
  indicators: Indicator[];
}

export const ScoreGraph = ({ indicators }: ScoreGraphProps) => {
  const data = indicators.map((indicator) => ({
    name: indicator.id,
    score: indicator.value || 0,
    threshold: indicator.threshold,
    isPassingThreshold: (indicator.value || 0) >= indicator.threshold,
  }));

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] h-[400px]">
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
          />
          <YAxis />
          <Tooltip
            formatter={(value: number, name: string) => [
              value.toFixed(2),
              name === "score" ? "Score" : "Threshold",
            ]}
          />
          <Legend />
          <Bar dataKey="score" name="Score">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.isPassingThreshold ? "#22c55e" : "#ef4444"}
              />
            ))}
          </Bar>
          <ReferenceLine y={0} stroke="#000" strokeWidth={2} />
        </BarChart>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 mr-2" />
          <span>Meeting or Exceeding Threshold</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 mr-2" />
          <span>Below Threshold</span>
        </div>
      </div>
    </div>
  );
};
