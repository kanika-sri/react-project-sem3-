import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function ChartSection({ data }) {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📊 Monthly Spending</h3>

      {/* 🔥 IMPORTANT HEIGHT FIX */}
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" fill="#667eea" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    marginTop: "20px"
  },
  title: {
    marginBottom: "10px"
  }
};

export default ChartSection;