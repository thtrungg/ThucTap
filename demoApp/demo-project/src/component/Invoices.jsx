import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

function Invoices() {
  const invoices = getInvoices();

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "20px auto",
      padding: "20px",
      border: "solid 1px black",
      borderRadius: "10px",
      backgroundColor: "#fff",
    },
    nav: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginBottom: "20px"
    },
    link: {
      textDecoration: "none",
      color: "#2980b9",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#f0f0f0"
    },
    linkHover: {
      backgroundColor: "#d0d0d0"
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        {invoices.map((invoice) => (
          <Link 
            to={`/invoices/${invoice.number}`} 
            key={invoice.number} 
            style={styles.link}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.linkHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.link.backgroundColor}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Invoices;
