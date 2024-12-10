import React, { useEffect, useState } from "react";
import innerstyles from "./innerstyles.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  let { sid } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/student/${sid}`)
      .then((res) => {
        setName(res.data.name);
        setPhone(res.data.phone);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updateStudent = () => {
    axios
      .put(`http://localhost:4000/student/${sid}`, { name, phone, address })
      .then((res) => {
        alert("Data Updated Succ..");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form className={innerstyles.bxshadow}>
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
                  type="button"
                  value="Update Student"
                  className="btn btn-success"
                  onClick={updateStudent}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditStudent;
