// components/AuditTrailsScreen.js

import React, { useState, useEffect } from 'react';

const AuditTrailsScreen = () => {
  const [auditTrails, setAuditTrails] = useState([]);

  useEffect(() => {
    // Fetch audit trails from API
    // Example: fetchAuditTrails().then(data => setAuditTrails(data));
  }, []);

  return (
    <div>
      <h1>Audit Trails</h1>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Invoice ID</th>
            <th>Timestamp</th>
            <th>Action Details</th>
            <th>Error Message</th>
          </tr>
        </thead>
        <tbody>
          {auditTrails.map(trail => (
            <tr key={trail.id}>
              <td>{trail.user}</td>
              <td>{trail.invoiceId}</td>
              <td>{trail.timestamp}</td>
              <td>{trail.actionDetails}</td>
              <td>{trail.errorMessage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditTrailsScreen;
