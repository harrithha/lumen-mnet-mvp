import { useState } from "react";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import RoleSelector from "@/components/RoleSelector";
import AlertCard, { Alert } from "@/components/AlertCard";
import CompetitiveChart from "@/components/CompetitiveChart";
import OpportunityCard from "@/components/OpportunityCard";
import ForecastCard from "@/components/ForecastCard";
import StoryCard from "@/components/StoryCard";

const mockAlerts: Alert[] = [
	{
		id: "1",
		priority: "high",
		title: "Critical CPA Spike in 'Flagship Q4 Campaign'",
		actionScore: 92,
		message: "CPA $45.10 (80% above target) | Potential wasted spend: $1,200",
		campaignTier: 1,
		metricWeight: "High",
		timestamp: "3 minutes ago",
		recommendations: {
			analyst: "Root cause points to ad fatigue in the 'US-West' geo-target. Suggest pausing this ad group and re-allocating its $5k/day budget to higher-performing segments.",
			cfo: "This anomaly impacts ROAS by -1.2 points. Pause the three lowest-performing ad groups immediately to protect campaign margin and preserve quarterly budget efficiency.",
			creative: "The 'Static Blue' creative set has a 90% fatigue rate. A/B test with the new 'Holiday Video' creative to improve engagement and reduce CPA by an estimated 30%."
		}
	},
	{
		id: "2",
		priority: "high",
		title: "Conversion Rate Drop in 'Mobile App Install Campaign'",
		actionScore: 88,
		message: "CVR down 45% | Lost conversions: 230 this week",
		campaignTier: 1,
		metricWeight: "High",
		timestamp: "15 minutes ago",
		recommendations: {
			analyst: "Mobile landing page load time increased to 4.2s (was 1.8s). Coordinate with dev team to optimize page speed. Consider implementing AMP pages for faster mobile experience.",
			cfo: "Lost conversions translate to $18,500 in missed revenue this week. Prioritize technical fix to restore performance and prevent further budget waste.",
			creative: "Mobile creative may not be optimized for smaller screens. Test new mobile-first ad formats with larger CTAs and simplified copy to improve conversion path."
		}
	},
	{
		id: "3",
		priority: "medium",
		title: "CTR Decline in 'Brand Awareness Campaign'",
		actionScore: 67,
		message: "CTR 2.1% (15% below target) | Impressions steady at 45K/day",
		campaignTier: 2,
		metricWeight: "Medium",
		timestamp: "1 hour ago",
		recommendations: {
			analyst: "Ad frequency reached 5.2 (optimal is 3-4). Implement frequency capping and refresh creative rotation to combat ad fatigue.",
			cfo: "While concerning, this campaign has lower revenue impact. Monitor for another 48 hours before major budget adjustments.",
			creative: "Creative refresh needed. Current assets have been running for 6 weeks. Launch the 'Spring Collection' creative set prepared last week."
		}
	},
	{
		id: "4",
		priority: "medium",
		title: "Budget Pacing Alert: 'Holiday Retargeting'",
		actionScore: 58,
		message: "Only 42% of budget spent with 35% of month remaining",
		campaignTier: 2,
		metricWeight: "Medium",
		timestamp: "2 hours ago",
		recommendations: {
			analyst: "Bid multipliers are too conservative. Increase bid ceiling by 20% and expand audience targeting to accelerate spending on this high-ROAS campaign.",
			cfo: "Under-spending on a proven winner (ROAS: 4.2x). Reallocate $3K from lower-performing campaigns to maximize Q4 returns.",
			creative: "Current creatives performing well. Consider expanding to additional placements (Stories, Reels) to increase reach and spend velocity."
		}
	},
	{
		id: "5",
		priority: "low",
		title: "Slight CPM Increase in 'Search Campaign'",
		actionScore: 35,
		message: "CPM $12.50 (8% above average) | No performance impact yet",
		campaignTier: 3,
		metricWeight: "Low",
		timestamp: "5 hours ago",
		recommendations: {
			analyst: "Normal seasonal fluctuation. Industry CPMs up 6% this week. Continue monitoring but no immediate action required.",
			cfo: "Minimal budget impact ($120 over target this week). Keep current strategy as other metrics remain healthy.",
			creative: "No creative changes needed. Quality Score remains high (8/10). Focus efforts on higher-priority campaigns."
		}
	}
];

const Index = () => {
	const [activeTab, setActiveTab] = useState("attention-shield");
	const [selectedRole, setSelectedRole] = useState("Analyst");

	return (
		<div className="min-h-screen">
			<Header />
			<TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{activeTab === "attention-shield" && (
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-2xl font-bold text-foreground mb-2">Attention Shield</h2>
								<p className="text-muted-foreground">Prioritized, cognitive-load aware alert feed</p>
							</div>
							<RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />
						</div>

						<div className="space-y-4">
							{mockAlerts.map((alert) => (
								<div key={alert.id}>
									{alert.priority === "high" && (
										<div className="mb-1">
											<span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded">To be emailed</span>
										</div>
									)}
									<AlertCard alert={alert} selectedRole={selectedRole} />
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "competitive-insights" && (
					<div className="space-y-6">
						<div>
							<h2 className="text-2xl font-bold text-foreground mb-2">Competitive Insights</h2>
							<p className="text-muted-foreground">Market context and relative performance analysis</p>
						</div>

						<CompetitiveChart />

						<StoryCard />

						<div>
							<h3 className="text-xl font-semibold text-foreground mb-4">Growth Opportunities</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<OpportunityCard
									title="🚀 Growth Opportunity Detected!"
									description="The 'GenZ Influencer' campaign CTR has surged by 45% in the last 3 days. Performance is peaking with strong engagement from 18-24 demographic."
									action="Increase Daily Budget by 50%"
								/>
								<OpportunityCard
									title="🚀 Untapped Audience Segment"
									description="'Premium Product' campaign showing 3.2x ROAS in the 35-44 age group, but only receiving 15% of budget. Significant scale opportunity identified."
									action="Expand Targeting to Similar Audiences"
								/>
							</div>
						</div>
					</div>
				)}

				{activeTab === "anomaly-forecast" && (
					<div className="space-y-6">
						<div>
							<h2 className="text-2xl font-bold text-foreground mb-2">Anomaly Forecast</h2>
							<p className="text-muted-foreground">Predictive insights and proactive alerts</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<ForecastCard
								prediction="Significant CPC Spike Likely"
								confidence={85}
								reasoning="Our model predicts three major competitors will launch their 'Black Friday' sales campaigns simultaneously tomorrow, increasing auction pressure in your primary keywords by an estimated 40-60%."
								trend="up"
							/>
							<ForecastCard
								prediction="Conversion Rate Improvement Expected"
								confidence={78}
								reasoning="Historical patterns show your 'Weekend Special' campaign performs 35% better on Saturdays. With improved weather forecast, expect above-average engagement and conversion rates."
								trend="up"
							/>
							<ForecastCard
								prediction="Budget Depletion Risk"
								confidence={92}
								reasoning="Current spend velocity (125% of daily target) combined with increased competition will exhaust your monthly budget 5 days early. Recommend implementing spend pacing controls."
								trend="down"
							/>
							<ForecastCard
								prediction="Seasonal CTR Decline Approaching"
								confidence={73}
								reasoning="Historical data shows a 20-25% CTR decline in your industry during the upcoming holiday period. Plan creative refresh and adjust bid strategies to maintain performance."
								trend="down"
							/>
						</div>
					</div>
				)}
			</main>
		</div>
	);
};

export default Index;
