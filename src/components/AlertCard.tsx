import { AlertTriangle, ThumbsUp, ThumbsDown, Tag, Clock } from "lucide-react";

export interface Alert {
  id: string;
  priority: "high" | "medium" | "low";
  title: string;
  actionScore: number;
  message: string;
  campaignTier: number;
  metricWeight: string;
  timestamp: string;
  recommendations: {
    analyst: string;
    cfo: string;
    creative: string;
  };
}

interface AlertCardProps {
  alert: Alert;
  selectedRole: string;
}

const AlertCard = ({ alert, selectedRole }: AlertCardProps) => {
  const priorityColors = {
    high: "border-l-destructive",
    medium: "border-l-warning",
    low: "border-l-border",
  };

  const priorityBadgeColors = {
    high: "bg-destructive/10 text-destructive",
    medium: "bg-warning/10 text-warning-foreground",
    low: "bg-muted text-muted-foreground",
  };

  const getRecommendation = () => {
    const role = selectedRole.toLowerCase() as keyof typeof alert.recommendations;
    return alert.recommendations[role] || alert.recommendations.analyst;
  };

  return (
    <div className={`bg-card rounded-xl shadow-card hover:shadow-card-hover transition-smooth border-l-4 ${priorityColors[alert.priority]} p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className={`w-5 h-5 ${alert.priority === 'high' ? 'text-destructive' : alert.priority === 'medium' ? 'text-warning' : 'text-muted-foreground'}`} />
          <h3 className="font-semibold text-foreground text-lg">{alert.title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityBadgeColors[alert.priority]}`}>
          {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)} Priority
        </span>
      </div>

      <div className="mb-4">
        <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-lg mb-3">
          <span className="font-bold text-lg">Action Score: {alert.actionScore}</span>
        </div>
        <p className="text-foreground font-medium mb-2">{alert.message}</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="inline-flex items-center space-x-1 text-xs bg-secondary px-2 py-1 rounded-md">
            <Tag className="w-3 h-3" />
            <span>Campaign Tier: {alert.campaignTier}</span>
          </span>
          <span className="inline-flex items-center space-x-1 text-xs bg-secondary px-2 py-1 rounded-md">
            <span>Metric Weight: {alert.metricWeight}</span>
          </span>
          <span className="inline-flex items-center space-x-1 text-xs text-muted-foreground px-2 py-1">
            <Clock className="w-3 h-3" />
            <span>{alert.timestamp}</span>
          </span>
        </div>
      </div>

      <div className="bg-secondary/50 rounded-lg p-4 mb-4">
        <p className="text-sm font-medium text-foreground mb-1">
          Recommendation for {selectedRole}:
        </p>
        <p className="text-sm text-muted-foreground">{getRecommendation()}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-xs text-muted-foreground">Was this alert helpful?</span>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-success/10 rounded-md transition-smooth group">
            <ThumbsUp className="w-4 h-4 text-muted-foreground group-hover:text-success" />
          </button>
          <button className="p-2 hover:bg-destructive/10 rounded-md transition-smooth group">
            <ThumbsDown className="w-4 h-4 text-muted-foreground group-hover:text-destructive" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
