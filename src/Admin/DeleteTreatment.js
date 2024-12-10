import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const DeleteTreatment = () => {
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

  const deleteData = (tid) => {
    axios
      .delete(`http://localhost:4000/treatment/${tid}`)
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
                    <th>T.Name</th>
                    <th>Desc</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {treatment.map((data) => {
                    return (
                      <tr key={data._id}>
                        <td>{data.name}</td>
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

export default DeleteTreatment;
