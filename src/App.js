// App.js

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VendorInvoicesScreen from './components/VendorInvoicesScreen';
import PaidScreen from './components/PaidScreen';
import TransactionHistoryScreen from './components/TransactionHistoryScreen';
import AuditTrailsScreen from './components/AuditTrailsScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={VendorInvoicesScreen} />
          <Route path="/paid" component={PaidScreen} />
          <Route path="/history" component={TransactionHistoryScreen} />
          <Route path="/audit" component={AuditTrailsScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
