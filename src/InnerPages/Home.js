import React, { useEffect, useState } from "react";
import Banner from "./banner.jpg";
import innerstyles from "./innerstyles.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [lnews, setLnews] = useState([]);
  const [treatment, setTreatment] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/lnews`)
      .then((res) => {
        setLnews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

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
      <section>
        <div>
          <img src={Banner} alt="Banner" />
        </div>
      </section>
      <section className={innerstyles.animate}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <marquee>
                {lnews.map((data) => {
                  return <span>{data.desc}</span>;
                })}
              </marquee>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <h2 className="text-center mb-4">Our Treatments</h2>
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

export default Home;
