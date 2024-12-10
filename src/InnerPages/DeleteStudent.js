import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const DeleteStudent = () => {
  const [student, setStudent] = useState([]); //[]
  useEffect(() => {
    axios
      .get(`http://localhost:4000/student`)
      .then((res) => {
        setStudent(res.data); //
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const deleteData = (sid) => {
    axios
      .delete(`http://localhost:4000/student/${sid}`)
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
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {student.map((stu) => {
                    return (
                      <tr key={stu._id}>
                        <td>{stu.name}</td>
                        <td>{stu.phone}</td>
                        <td>{stu.address}</td>
                        <td>
                          <button
                            className="btn btn-danger me-3"
                            onClick={() => deleteData(stu._id)}
                          >
                            Delete
                          </button>
                          <NavLink to={`/editstudent/${stu._id}`}>
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

export default DeleteStudent;
