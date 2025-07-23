import React from 'react';
import '../styles/UserManagePage.css';

function UserManagePage() {
  return (
    <div className="user-manage-page">

      <button className="back-button">← Back</button>

      <h2 className="user-manage-title">User Management</h2>

      <div className="user-manage-topbar">
        <input type="text" placeholder="Search User" className="user-search-input" />
        <div className="user-manage-buttons">
          <button className="filter-button">Filter</button>
          <button className="create-button">Create new</button>
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
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default UserManagePage;
