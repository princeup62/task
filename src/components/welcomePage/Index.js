import React, { useState } from "react";
import FirstStepForm from "./FirstStepForm";
import PaymentCard from "./PaymentCard";
import SecondStepForm from "./SecondStepForm";

function Index() {
  const [dataForPost, setDataForPost] = useState({});
  const [formStep, SetFormState] = useState(1);

  const handlePost = () => {
    console.log(dataForPost);
    fetch("http://localhost:3001/payement", {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataForPost),
    }).then((result) =>
      result.json().then((response) => {
        console.log(response);
        alert(" payment sucessful...");
      })
    );
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="head-title my-5 text-center">
          <h1>Get Start With Hyper Cart Standard</h1>
          <p>
            Get a demo of our standard functionality. we'll answer your
            questions
            <br />
            and prepare you for a trial
          </p>
        </div>
        <div className="row text-left">
          <div className="col-md-6">
            {formStep == 1 ? (
              <FirstStepForm
                setDataForPost={setDataForPost}
                SetFormState={SetFormState}
              />
            ) : (
              <SecondStepForm
                setDataForPost={setDataForPost}
                dataForPost={dataForPost}
                handlePost={handlePost}
              />
            )}
          </div>
          <div className="col-md-6">
            <PaymentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
