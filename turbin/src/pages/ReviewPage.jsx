import React, { useState } from "react";
import "../styles/ReviewPage.css"; // hoặc dùng Tailwind nếu bạn cài sẵn

export default function ReviewPage() {
  const [showModal, setShowModal] = useState(false);

  const handleCreateClick = () => setShowModal(true);
  const handleCancel = () => setShowModal(false);

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li className="logo_bt">User</li>
          <li className="dashboard_bt">Dashboard</li>
          <li className="review_bt">Review</li>
          <li className="user_bt">User Manage</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        {/* Header */}
        <div className="header">
          <button className="btn-create" onClick={handleCreateClick}>
            + Create
          </button>
        </div>

        {/* Search */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search turbine name or company..."
          />
        </div>

        {/* Table */}
        <table className="turbine-table">
          <thead>
            <tr>
              <th>Created</th>
              <th>Turbine</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-07-21</td>
              <td>Turbine A (Company X)</td>
              <td>0</td>
              <td>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2025-07-20</td>
              <td>Turbine B (Company Y)</td>
              <td>2</td>
              <td>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create New Turbine</h2>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="text" placeholder="Enter company" />
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn-confirm">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
