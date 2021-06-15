import React from "react";
import "./style.css";

function PaymentCard() {
  return (
    <div class="card paymentcard" style={{ width: "18rem" }}>
      <div class="card-body ">
        <h6>Standard</h6>

        <span className="d-flex ">
          <h6>49.95</h6>
          <p>/month</p>
        </span>

        <hr />
        <ul>
          <li>product Tracker and in-stock alerts.</li>
          <li>Auto checkout (up to 10 concurrent tasks ) </li>
          <li>unlimited billing/Shipping addresses</li>
        </ul>
      </div>
    </div>
  );
}

export default PaymentCard;
