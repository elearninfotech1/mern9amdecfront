import React, { useEffect, useState } from "react";
import innerstyles from "./innerstyles.module.css";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const TreatementDetails = () => {
  const [treatment, setTreatment] = useState("");
  const { tid } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/treatment/${tid}`)
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
              <h2>{treatment.name}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>{treatment.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatementDetails;
