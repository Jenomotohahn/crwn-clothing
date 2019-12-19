import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripePK = "pk_test_G8eVXpXbqWRwUQhrykD9u2EJ00wxBKugS8";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripePK}
    />
  );
};

export default StripeCheckoutButton;
