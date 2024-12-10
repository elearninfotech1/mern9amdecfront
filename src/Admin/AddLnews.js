import React, { useState } from "react";
import adminstyles from "./adminStyles.module.css";
import axios from "axios";
const AddLnews = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const addLnews = (e) => {
    e.preventDefault();
    //console.log(name, phone, address);
    axios
      .post(`https://mern9amdecback-1.onrender.com/lnews`, { title, desc })
      .then((res) => {
        alert("Lnews Added Succ...");
        setTitle("");
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
            <form className={adminstyles.bxshadow} onSubmit={addLnews}>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value="Add Lnews"
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

export default AddLnews;
