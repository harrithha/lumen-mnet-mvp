import { Rocket, ArrowRight } from "lucide-react";

interface OpportunityCardProps {
  title: string;
  description: string;
  action: string;
}

const OpportunityCard = ({ title, description, action }: OpportunityCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-smooth border-l-4 border-l-success p-6">
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
          <Rocket className="w-5 h-5 text-success" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <button className="w-full mt-4 bg-success text-success-foreground px-4 py-2.5 rounded-lg font-medium hover:bg-success/90 transition-smooth flex items-center justify-center space-x-2 group">
        <span>{action}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
      </button>
    </div>
  );
};

export default OpportunityCard;
