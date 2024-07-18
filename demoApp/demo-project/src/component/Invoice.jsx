import { useParams } from "react-router-dom";
import { getInvoiceByNumber } from "../data";

export default function Invoice() {
  const params = useParams();
  const invoice = getInvoiceByNumber(parseInt(params.invoiceId, 10));

  const styles = {
    main: {
      maxWidth: "600px",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      backgroundColor: "#fff",
      fontFamily: "Arial, sans-serif"
    },
    totalDue: {
      fontSize: "24px",
      color: "#2c3e50",
      marginBottom: "20px"
    },
    invoiceInfo: {
      fontSize: "18px",
      color: "#34495e",
      marginBottom: "10px"
    },
    invoiceLabel: {
      fontWeight: "bold",
      color: "#2980b9"
    }
  };

  return (
    <main style={styles.main}>
      <h2 style={styles.totalDue}>Total Due: ${invoice.ammount}</h2>
      <p style={styles.invoiceInfo}>
        <span style={styles.invoiceLabel}>Name:</span> {invoice.name}
      </p>
      <p style={styles.invoiceInfo}>
        <span style={styles.invoiceLabel}>Invoice Number:</span> {invoice.number}
      </p>
      <p style={styles.invoiceInfo}>
        <span style={styles.invoiceLabel}>Due Date:</span> {invoice.due}
      </p>
    </main>
  );
}
