function SubscriptionCard({ name, price, status, onUpgrade, onDowngrade }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p style={styles.price}>₹{price}</p>
      <p style={{
  background: status === "Active" ? "green" : "gray",
  color: "#fff",
  padding: "4px 10px",
  borderRadius: "6px",
  display: "inline-block"
}}>
  {status}
</p>
      <div style={styles.btns}>
        <button style={styles.up} onClick={onUpgrade}>Upgrade</button>
        <button style={styles.down} onClick={onDowngrade}>Downgrade</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  price: {
    fontSize: "20px",
    fontWeight: "bold"
  },

  btns: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },

  up: {
    background: "green",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px"
  },

  down: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px"
  }
};

export default SubscriptionCard;