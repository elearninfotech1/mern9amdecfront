import React from "react";
//import StudentData from "./InnerPages/StudentData";
import AddStudent from "./InnerPages/AddStudent";
import { Route, Routes } from "react-router-dom";
import DeleteStudent from "./InnerPages/DeleteStudent";
import EditStudent from "./InnerPages/EditStudent";
import Admin from "./Admin/Admin";
import Register from "./Admin/Register";
import AdminDashboard from "./Admin/AdminDashboard";
import Home from "./InnerPages/Home";
import AddLnews from "./Admin/AddLnews";
import DeleteLnews from "./Admin/DeleteLnews";
import AddTreatment from "./Admin/AddTreatment";
import Treatement from "./InnerPages/Treatement";
import TreatementDetails from "./InnerPages/TreatementDetails";
import DeleteTreatment from "./Admin/DeleteTreatment";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatements" element={<Treatement />} />
        <Route path="/treatmentdetails/:tid" element={<TreatementDetails />} />
        <Route path="/editstudent/:sid" element={<EditStudent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddLnews />} />
          <Route path="addtreatment" element={<AddTreatment />} />
          <Route path="deletelnews" element={<DeleteLnews />} />
          <Route path="deletetreatment" element={<DeleteTreatment />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
