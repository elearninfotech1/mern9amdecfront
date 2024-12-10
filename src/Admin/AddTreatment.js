import React, { useState } from "react";
import adminstyles from "./adminStyles.module.css";
import axios from "axios";
const AddTreatment = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const addTreatment = (e) => {
    e.preventDefault();
    axios
      .post(`https://mern9amdecback-1.onrender.com/treatment`, { name, desc })
      .then((res) => {
        alert("Treatment Added Succ...");
        setName("");
        setDesc("");
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
            <form className={adminstyles.bxshadow} onSubmit={addTreatment}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="T.Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  name="desc"
                  className="form-control"
                  placeholder="Desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-3">
                <input
                  type="submit"
                  value="Add Treatment"
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

export default AddTreatment;
