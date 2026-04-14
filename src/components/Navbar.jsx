import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.nav}>
      <h2>SaaS Dashboard 🚀</h2>

      <div>
        {isAuth ? (
          <>
            <Link to="/" style={styles.link}>Dashboard</Link>
            <Link to="/billing" style={styles.link}>Billing</Link>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={styles.link}>Login</Link>
        )}
      </div>
    </div>
  );
}

const styles = {
  nav:{
    display:"flex",
    justifyContent:"space-between",
    padding:"15px",
    background:"#667eea",
    color:"#fff"
  },
  link:{
    marginLeft:"10px",
    color:"#fff",
    textDecoration:"none"
  },
  logoutBtn:{
    marginLeft:"10px",
    background:"red",
    color:"#fff",
    border:"none",
    padding:"6px 10px",
    borderRadius:"5px"
  }
};

export default Navbar;