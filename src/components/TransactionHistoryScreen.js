// components/TransactionHistoryScreen.js

import React, { useState, useEffect } from 'react';

const TransactionHistoryScreen = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transaction history from API
    // Example: fetchTransactionHistory().then(data => setTransactions(data));
  }, []);

  return (
    <div>
      <h1>Transaction History</h1>
      <table>
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Vendor Name</th>
            <th>Invoice Amount</th>
            <th>Payment Date/Time</th>
            <th>UTR Number</th>
            <th>Status</th>
            <th>Error Message</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.invoiceId}</td>
              <td>{transaction.vendorName}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.paymentDateTime}</td>
              <td>{transaction.utrNumber}</td>
              <td>{transaction.status}</td>
              <td>{transaction.errorMessage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryScreen;
