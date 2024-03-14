// components/PaidScreen.js

import React, { useState, useEffect } from 'react';

const PaidScreen = () => {
  const [paidInvoices, setPaidInvoices] = useState([]);

  useEffect(() => {
    // Fetch paid invoices from API
    // Example: fetchPaidInvoices().then(data => setPaidInvoices(data));
  }, []);

  return (
    <div>
      <h1>Paid Invoices</h1>
      <ul>
        {paidInvoices.map(invoice => (
          <li key={invoice.id}>
            <div>{invoice.vendorName}</div>
            <div>Amount: {invoice.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaidScreen;
