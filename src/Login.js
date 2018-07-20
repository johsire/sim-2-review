import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  constructor() {
    super();
  }

  handleLogin(role) {
    axios.post("/api/login", { role: role });
  }

  render() {
    return (
      <div>
        <div>Login</div>
        <button onClick={() => this.handleLogin("admin")}>I'm an Admin</button>
        <button onClick={() => this.handleLogin("student")}>
          I'm a Student
        </button>
      </div>
    );
  }
}