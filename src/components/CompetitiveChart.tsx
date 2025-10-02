import { TrendingUp } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["W1", "W2", "W3", "W4"],
  datasets: [
    {
      label: "Your CTR",
      data: [3.2, 3.4, 3.1, 3.0],
      borderColor: "hsl(245, 100%, 67%)",
      backgroundColor: "rgba(99,102,241,0.1)",
      tension: 0.4,
      pointBackgroundColor: "hsl(245, 100%, 67%)",
      pointBorderColor: "#fff",
      pointRadius: 5,
    },
    {
      label: "Peer CTR",
      data: [3.5, 3.6, 3.0, 2.7],
      borderColor: "hsl(220, 9%, 46%)",
      backgroundColor: "rgba(220,220,220,0.1)",
      borderDash: [6, 4],
      tension: 0.4,
      pointBackgroundColor: "hsl(220, 9%, 46%)",
      pointBorderColor: "#fff",
      pointRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Your Performance vs. Industry Benchmark" },
  },
  scales: {
    y: { beginAtZero: true, max: 4 },
  },
};

const CompetitiveChart = () => (
  <div className="bg-card rounded-xl shadow-card p-6">
    <div className="flex items-center space-x-2 mb-6">
      <TrendingUp className="w-5 h-5 text-primary" />
      <h3 className="text-lg font-semibold text-foreground">Your Performance vs. Industry Benchmark</h3>
    </div>
    <Line data={data}/>
    <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
      <p className="text-sm text-foreground">
        <span className="font-semibold text-success">You're outperforming the market.</span> Your campaign CTR is down 3%, but the peer average is down 10% due to seasonality. Your strategy is proving resilient.
      </p>
    </div>
  </div>
);

export default CompetitiveChart;
