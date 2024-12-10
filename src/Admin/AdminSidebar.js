import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <ul>
        <li className="mb-4">
          <NavLink to="">Add Lnews</NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="deletelnews">Edit&Delete Lnews</NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="addtreatment">Add Treatment</NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="deletetreatment">Edit&Delete Treatment</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
