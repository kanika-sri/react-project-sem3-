import { useState, useEffect } from "react";
import BillingHistory from "../components/BillingHistory";
import { Link } from "react-router-dom";

function Billing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔥 DUMMY DATA
    const dummyData = [
      {
        id: 1,
        name: "Netflix",
        date: "2025-03-01",
        amount: 499,
        status: "Paid"
      },
      {
        id: 2,
        name: "Spotify",
        date: "2025-03-02",
        amount: 199,
        status: "Paid"
      },
      {
        id: 3,
        name: "Amazon Prime",
        date: "2025-03-05",
        amount: 299,
        status: "Pending"
      }
    ];

    // simulate loading
    setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 1000);

  }, []);

  return (
    <div style={styles.container}>
      
      <div style={styles.nav}>
        <h1 style={styles.title}>Billing 💳</h1>
        <Link to="/" style={styles.link}>← Dashboard</Link>
      </div>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading billing data...</p>
      ) : (
        <BillingHistory data={data}/>
      )}

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
  title:{
    fontSize:"24px",
    fontWeight:"600"
  },
  link:{
    background:"#667eea",
    color:"#fff",
    padding:"8px 15px",
    borderRadius:"8px",
    textDecoration:"none"
  }
};

export default Billing;
