import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const DeleteLnews = () => {
  const [lnews, setLnews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mern9amdecback-1.onrender.com/lnews`)
      .then((res) => {
        setLnews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const deleteData = (lid) => {
    axios
      .delete(`https://mern9amdecback-1.onrender.com/lnews/${lid}`)
      .then((res) => {
        alert("Data Deleted Succ..");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered" id="mytable">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Desc</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {lnews.map((data) => {
                    return (
                      <tr key={data._id}>
                        <td>{data.title}</td>
                        <td>{data.desc}</td>
                        <td className="d-flex">
                          <button
                            className="btn btn-danger me-3"
                            onClick={() => deleteData(data._id)}
                          >
                            Delete
                          </button>
                          <NavLink to={`/editstudent/${data._id}`}>
                            <button className="btn btn-primary">Update</button>
                          </NavLink>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteLnews;
