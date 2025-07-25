// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ activeTab, setActiveTab }) {
  const navigate = useNavigate();

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  const currentRole = JSON.parse(localStorage.getItem("currentUser"))?.role;

  return (
    <aside className="sidebar">
      <ul className="menu">
        <li
          className={activeTab === "user" ? "active" : ""}
          onClick={() => handleNavigate("user", "/setting")}
        >
          User
        </li>

        <li
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => handleNavigate("dashboard", "/review")}
        >
          Dashboard
        </li>

        <li
          className={activeTab === "review" ? "active" : ""}
          onClick={() => handleNavigate("review", "/filter")}
        >
          Filter
        </li>

        {currentRole === "admin" && (
          <li
            className={activeTab === "manage" ? "active" : ""}
            onClick={() => handleNavigate("manage", "/user")}
          >
            User Management
          </li>
        )}
      </ul>
    </aside>
  );
}
