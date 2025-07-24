import React, { useState } from 'react';
import '../styles/UserManagePage.css';

function UserManagePage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);

  return (
    <div className="user-manage-page">
      <button className="back-button">Back</button>

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

        {/* Create User Form */}
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

        {/* Detail / Edit User Form */}
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
