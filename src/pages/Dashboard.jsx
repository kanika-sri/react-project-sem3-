import { useEffect, useState } from "react";
import axios from "axios";
import SubscriptionCard from "../components/SubscriptionCard";
import ChartSection from "../components/ChartSection";
import { Link } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/subscriptions")
      .then(res => setData(res.data))
      .catch(() => {
        setData([
          { name:"Netflix", price:499, status:"Active" },
          { name:"Spotify", price:199, status:"Active" }
        ]);
      });
  }, []);

  const updatePlan = (i, type) => {
  const updated = data.map((item, index) => {
    if (index === i) {
      return {
        ...item,
        price:
          type === "upgrade"
            ? item.price + 100
            : item.price - 100,
        status:
          type === "upgrade"
            ? "Upgraded"
            : "Downgraded"
      };
    }
    return item;
  });

  setData(updated);
};
  return (
    <div style={styles.container}>
      
      <div style={styles.nav}>
        <h1>SaaS Dashboard 🚀</h1>
        <Link to="/billing" style={styles.link}>Billing</Link>
      </div>

      <div style={styles.grid}>
        {data.map((item,i)=>(
          <SubscriptionCard
            key={i}
            {...item}
            onUpgrade={()=>updatePlan(i,"upgrade")}
            onDowngrade={()=>updatePlan(i,"downgrade")}
          />
        ))}
      </div>

      <div style={styles.chartBox}>
        <ChartSection data={data}/>
      </div>

    </div>
  );
}

const styles = {
  container:{
    padding:"20px",
    background:"#f4f7fb",
    minHeight:"100vh"
  },
  nav:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"20px"
  },
  link:{
    background:"#667eea",
    color:"#fff",
    padding:"8px 15px",
    borderRadius:"8px",
    textDecoration:"none"
  },
  grid:{
    display:"flex",
    gap:"20px",
    flexWrap:"wrap"
  },
  chartBox:{
    marginTop:"30px",
    background:"#fff",
    padding:"20px",
    borderRadius:"12px",
    boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
  }
};

export default Dashboard;