import { Newspaper } from "lucide-react";

const StoryCard = () => {
  return (
    <div className="bg-card rounded-xl shadow-card p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Newspaper className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">This Week's Key Story</h3>
      </div>
      
      <div className="prose prose-sm max-w-none">
        <p className="text-foreground leading-relaxed mb-4">
          The lead story is the success of our <span className="font-semibold text-primary">'Video First'</span> initiative. While Display ads saw a slight dip, Video Ad CTR was <span className="font-bold text-success">2x the account average</span>, driving a 15% lift in overall CVR.
        </p>
        <p className="text-muted-foreground text-sm">
          This confirms our strategic shift is paying off. Video content is resonating with our target audience, particularly in the 25-34 age demographic. Consider reallocating 20% of Display budget to Video campaigns for Q1.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
          Video Performance
        </span>
        <span className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
          +15% CVR Lift
        </span>
        <span className="inline-block bg-secondary text-foreground px-3 py-1 rounded-full text-xs font-medium">
          Strategic Win
        </span>
      </div>
    </div>
  );
};

export default StoryCard;
