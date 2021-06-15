import React, { useState } from "react";

function SecondStepForm({ setDataForPost, dataForPost, handlePost }) {
  const [state, setstate] = useState({
    CardNumber: "",
    cardHolder: "",
    expDate: "",
    cvv: "",
    amount: 0,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setstate({ ...state, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    if (state.cvv.length !== 3) alert("cvv length must equal to 3");
    else if (state.amount < 0) alert("amount should not be less than 0");
    else {
      setDataForPost({ ...dataForPost, ...state });
    }
    handlePost();
    event.preventDefault();
  };

  return (
    <>
      <h4>Payment Mode</h4>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1"> Card Number</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            name="CardNumber"
            value={state.CardNumber}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1"> Card holder's name</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            name="cardHolder"
            value={state.cardHolder}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1"> Exp Date</label>
          <input
            type="date"
            class="form-control"
            aria-describedby="emailHelp"
            name="expDate"
            value={state.expDate}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">CVV</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            name="cvv"
            value={state.cvv}
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Amount</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            name="amount"
            onChange={handleChange}
            value={state.amount}
          />
        </div>
        <br />

        <button class="btn btn-primary" onClick={handleSubmit}>
          Proceed
        </button>
      </form>
    </>
  );
}

export default SecondStepForm;
