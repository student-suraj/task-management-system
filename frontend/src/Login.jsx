import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data
      );

      alert("Login Successful");

      console.log(response.data);

    } catch (error) {

      alert("Login Failed");

      console.log(error);

    }
  };

  return (
    <div>

      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;