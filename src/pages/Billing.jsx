import { useEffect, useState } from "react";
import axios from "axios";
import BillingHistory from "../components/BillingHistory";
import { Link } from "react-router-dom";

function Billing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/billing-history")
      .then(res => {
        console.log("DATA:", res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("ERROR:", err);
        setLoading(false);
      });
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