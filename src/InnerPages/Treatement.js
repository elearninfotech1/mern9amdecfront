import React, { useEffect, useState } from "react";
import innerstyles from "./innerstyles.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Treatement = () => {
  const [treatment, setTreatment] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/treatment`)
      .then((res) => {
        setTreatment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <section className={`${innerstyles.breadcrumb}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Treatements</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            {treatment.map((trea) => {
              return (
                <div className="col-md-3">
                  <NavLink to={`/treatmentdetails/${trea._id}`}>
                    <div className={`py-3 mb-4 ${innerstyles.bxshadow}`}>
                      {trea.name}
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatement;
