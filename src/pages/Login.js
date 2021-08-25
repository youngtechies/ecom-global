import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  async function checkLogin(){
      let item = {email,password}

      let result = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })

    result = await result.json();
    let username = result.email
    console.log("username---->",username);
    if(username === null){
        history.push("/login");
        setShow(true);
    } else {
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add");
    }
    

  }

  return (
    <>
      <Header />
      {show ? <div>
        <p>
          User does not exist.
        </p>

      </div>
        : ""
        }
      <h3>Login page</h3>
      <div className="col-sm-6 offset-sm-3">
          <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email" className="form-control"/><br/>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="form-control"/><br/>
          <button onClick={checkLogin} className="btn btn-primary">Login</button>
      </div>
    </>
  );
}

export default Login;
