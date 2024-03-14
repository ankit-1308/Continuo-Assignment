// services/paymentService.js
import paymentService from '../services/paymentService';

const initiatePayment = (invoiceId) => {
    return fetch('https://shz1z2l4lb.execute-api.ap-south-1.amazonaws.com/Prod/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        invoice_id: invoiceId,
      }),
    });
  };
  
  export { initiatePayment };
  