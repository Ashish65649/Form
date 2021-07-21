import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  function sendDataToServer(obj) {
    console.log(obj);
    fetch("https://form-spring.herokuapp.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(JSON.stringify(data));
      })
      .catch((error) => console.log(error.message));
  }

  function submitForm(event) {
    event.preventDefault();
    let obj = {
      userName: name,
      userEmail: email,
      userPassword: password,
    };
    sendDataToServer(obj);
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <p>Application Form</p>
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              onInput={(event) => setName(event.target.value)}
              className="form-control"
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name: "
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              onInput={(event) => setEmail(event.target.value)}
              className="form-control"
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email: "
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              onInput={(event) => setPassword(event.target.value)}
              className="form-control"
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password: "
            />
          </div>
          <button className="btn">Submit</button>
        </form>
        <p> {response} </p>
      </div>
    </React.Fragment>
  );
};

export default Form;
