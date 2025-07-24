import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserManagePage.css';

function UserManagePage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [activeTab, setActiveTab] = useState("manage");
  const navigate = useNavigate();

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <div className="app-layout">
      {/* Sidebar thay thế nút Back */}
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
            Review
          </li>
          <li
            className={activeTab === "manage" ? "active" : ""}
            onClick={() => handleNavigate("manage", "/user")}
          >
            User Manage
          </li>
        </ul>
      </aside>

      {/* Nội dung chính giữ nguyên */}
      <div className="user-manage-content">
        <div className="user-manage-topbar">
          <input type="text" placeholder="Search User" className="user-search-input" />
          <div className="user-manage-buttons">
            <button className="filter-button">Filter</button>
            <button className="create-button" onClick={() => setShowCreateForm(true)}>Create</button>
          </div>
        </div>

        <div className="user-table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Company</th>
                <th>Role</th>
                <th>Last Visit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123456</td>
                <td>Nguyen</td>
                <td>ng1234@gmail.com</td>
                <td>A</td>
                <td>Technician</td>
                <td>9h21 21/7/25</td>
                <td>
                  <button className="detail-button" onClick={() => setShowDetailForm(true)}>Detail</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Form tạo */}
        {showCreateForm && (
          <div className="form-wrapper">
            <h3>Create User</h3>
            <input type="text" placeholder="Username" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
            <input type="text" placeholder="Company" className="form-input" />
            <select className="form-input">
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="technician">Technician</option>
            </select>
            <div className="form-buttons">
              <button className="form-submit">Create</button>
              <button className="form-cancel" onClick={() => setShowCreateForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        {/* Form chi tiết */}
        {showDetailForm && (
          <div className="form-wrapper">
            <h3>User Detail</h3>
            <input type="text" defaultValue="Nguyen" className="form-input" />
            <input type="email" defaultValue="ng1234@gmail.com" className="form-input" />
            <input type="text" defaultValue="A" className="form-input" />
            <select className="form-input" defaultValue="technician">
              <option value="admin">Admin</option>
              <option value="technician">Technician</option>
            </select>
            <div className="form-buttons">
              <button className="form-submit">Save</button>
              <button className="form-delete">Delete</button>
              <button className="form-cancel" onClick={() => setShowDetailForm(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserManagePage;
