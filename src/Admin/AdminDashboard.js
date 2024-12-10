import React from "react";
import AdminSidebar from "./AdminSidebar";
import headerStyles from "../header/header.module.css";
import adminstyles from "./adminStyles.module.css";
import { Outlet } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <>
      <section className={`${headerStyles.breadcrumb}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Admin Dashboard</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AdminSidebar />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
