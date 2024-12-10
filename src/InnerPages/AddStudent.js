import React, { useState } from "react";
import innerstyles from "./innerstyles.module.css";
import axios from "axios";
const AddStudent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const addstudent = (e) => {
    e.preventDefault();
    //console.log(name, phone, address);
    axios
      .post(`http://localhost:4000/student`, { name, phone, address })
      .then((res) => {
        alert("Student Added Succ...");
        setName("");
        setPhone("");
        setAddress("");
      })
      .catch((err) => {
        alert("Unable to add student");
      });
  };
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form className={innerstyles.bxshadow} onSubmit={addstudent}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value="Add Student"
                  className="btn btn-success"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddStudent;
