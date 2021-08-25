import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
      e.preventDefault();
      save();   
  }

  async function save() {
    let item = { email, name, password };
    let result = await fetch("http://localhost:8081/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("success");
    result = await result.json();
    console.log("result :", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
    console.log("push success");
  }

  return (
    <>
      <Header />
      <h3>Register page</h3>
      <form className="container col-sm-3" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="full name"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <br />
      </form>
    </>
  );
}

export default Register;
