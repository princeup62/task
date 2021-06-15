import React, { useState } from "react";

function FirstStepForm({ setDataForPost, SetFormState }) {
  const [firstFormData, setFirstFormData] = useState({
    emailAddress: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    checkbox: true,
  });

  const handleFirstFormSubmit = (event) => {
    setDataForPost({ ...firstFormData });
    SetFormState(2);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setFirstFormData({ ...firstFormData, [event.target.name]: value });
    console.log(firstFormData);
  };

  const handleCheckbox = (event) => {
    let checked = event.target.checked;
    setFirstFormData({ ...firstFormData, checkbox: checked });
    SetFormState(2);
  };

  return (
    <>
      <h4>Welcome to HyperCart</h4>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            value={firstFormData.emailAddress}
            name="emailAddress"
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1"> First Name</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            value={firstFormData.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1"> Last Name</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            value={firstFormData.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            value={firstFormData.checkbox}
            name="checkbox"
            onClick={handleCheckbox}
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <button class="btn btn-primary" onClick={handleFirstFormSubmit}>
          Get Started
        </button>
      </form>
    </>
  );
}

export default FirstStepForm;
