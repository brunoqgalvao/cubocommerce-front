
export const pagarmeCheckout = (amount) => {
  let checkout = new window.PagarMeCheckout.Checkout({
    encryption_key: "ENCRYPTION_KEY",
    success: function(data) {
      alert(JSON.stringify(data));
    },
    error: function(err) {
      alert(JSON.stringify(err));
    },
    close: function() {
      alert("The modal has been closed.");
    }
  });

  checkout.open({
    amount: amount,
    buttonText: "Pagar",
    customerData: "false",
    createToken: "false",
    paymentMethods: "credit_card"
  });
}

import pagarme from 'pagarme'
