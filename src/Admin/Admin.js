import React, { useState } from "react";
import adminstyles from "./adminStyles.module.css";
import axios from "axios";
import headerStyles from "../header/header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const addstudent = (e) => {
    e.preventDefault();
    axios
      .post(`https://mern9amdecback-1.onrender.com/login`, { email, password })
      .then((res) => {
        if (res.data == "Valid") {
          navigate("/admindashboard");
        } else {
          alert("Invalid Username & Password");
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        alert("Unable to add student");
      });
  };
  return (
    <main>
      <section className={`${headerStyles.breadcrumb}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Admin</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className={adminstyles.bxshadow}>
                <form onSubmit={addstudent}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      value="Admin Login"
                      className="btn btn-success"
                    />
                  </div>
                </form>

                <NavLink to="/register">Register</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
