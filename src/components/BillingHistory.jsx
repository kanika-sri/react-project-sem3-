function BillingHistory({ data }) {

  const downloadInvoice = (item) => {
    const content = `
----- INVOICE -----

Service: ${item.name}
Date: ${item.date}
Amount: ₹${item.amount}
Status: ${item.status}

Thank you for your payment 🙏
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${item.name}-invoice.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: "20px", background: "#fff", borderRadius: "10px" }}>
      <h2>Billing History</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#667eea", color: "#fff" }}>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>₹{item.amount}</td>

              <td>
                <span style={{
                  background: item.status === "Paid" ? "green" : "gray",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "6px"
                }}>
                  {item.status}
                </span>
              </td>

              <td>
                <button onClick={() => downloadInvoice(item)}>
                  Download
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default BillingHistory;