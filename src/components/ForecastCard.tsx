import { Zap, TrendingDown, TrendingUp, Calendar } from "lucide-react";

interface ForecastCardProps {
  prediction: string;
  confidence: number;
  reasoning: string;
  trend: "up" | "down";
}

const ForecastCard = ({ prediction, confidence, reasoning, trend }: ForecastCardProps) => {
  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;
  
  return (
    <div className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-smooth p-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            trend === "up" ? "bg-warning/10" : "bg-destructive/10"
          }`}>
            <TrendIcon className={`w-6 h-6 ${
              trend === "up" ? "text-warning" : "text-destructive"
            }`} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-lg">{prediction}</h3>
            <p className="text-sm text-muted-foreground mt-1">Predicted for tomorrow</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Confidence Score</span>
          <span className="text-sm font-bold text-primary">{confidence}%</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-smooth"
            style={{ width: `${confidence}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-secondary/50 rounded-lg p-4 mb-4">
        <p className="text-sm font-medium text-foreground mb-2 flex items-center space-x-2">
          <Zap className="w-4 h-4 text-primary" />
          <span>Why this matters:</span>
        </p>
        <p className="text-sm text-muted-foreground">{reasoning}</p>
      </div>

      <button className="w-full bg-secondary hover:bg-secondary/80 text-foreground px-4 py-2 rounded-lg font-medium transition-smooth flex items-center justify-center space-x-2">
        <Calendar className="w-4 h-4" />
        <span>Add to Marketing Calendar</span>
      </button>
    </div>
  );
};

export default ForecastCard;
