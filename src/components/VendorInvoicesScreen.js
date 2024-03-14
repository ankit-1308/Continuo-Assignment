// components/VendorInvoicesScreen.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initiatePayment } from '../services/paymentService';

const VendorInvoicesScreen = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch invoices from API
    // Example: fetchInvoices().then(data => setInvoices(data));
  }, []);

  const handlePayment = (invoiceId) => {
    initiatePayment(invoiceId)
      .then(() => {
        // Update invoice status to 'PAID'
        // Example: updateInvoiceStatus(invoiceId, 'PAID');
        // Remove the invoice from the 'Ready to Pay' screen
        setInvoices(invoices.filter(invoice => invoice.id !== invoiceId));
      })
      .catch(error => {
        console.error('Payment failed:', error);
      });
  };

  return (
    <div>
      <h1>Ready to Pay</h1>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            <div>{invoice.vendorName}</div>
            <div>Amount: {invoice.amount}</div>
            <button onClick={() => handlePayment(invoice.id)}>Pay Now</button>
          </li>
        ))}
      </ul>
      <Link to="/history">View Transaction History</Link>
      <Link to="/audit">View Audit Trails</Link>
    </div>
  );
};

export default VendorInvoicesScreen;
