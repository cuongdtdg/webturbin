import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReviewPage.css";

export default function ReviewPage() {
  const [showModal, setShowModal] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const turbines = [
    { created: "2025-07-21", name: "Turbine A", company: "Company X", images: 0 },
    { created: "2025-07-20", name: "Turbine B", company: "Company Y", images: 2 },
  ];

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  const handleCreateClick = () => setShowModal(true);
  const handleCancel = () => setShowModal(false);

  const handleDetailClick = (turbine) => setDetailData({ ...turbine });
  const handleCloseDetail = () => setDetailData(null);

  const handleSave = () => {
    console.log("Saved:", detailData);
    handleCloseDetail();
  };

  const handleDelete = () => {
    console.log("Deleted:", detailData);
    handleCloseDetail();
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
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

      {/* Main content */}
      <main className="main-content">
        <div className="header">
          <button className="btn-create" onClick={handleCreateClick}>+ Create</button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search turbine name or company..." />
        </div>

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
            {turbines.map((tur, index) => (
              <tr key={index} onClick={() => navigate("/upload")}>
                <td>{tur.created}</td>
                <td>{tur.name} ({tur.company})</td>
                <td>{tur.images}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDetailClick(tur);
                    }}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Create Modal */}
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
              <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
              <button className="btn-confirm">Create</button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {detailData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Turbine Detail</h2>
            <div className="form-group">
              <label>Turbine Name</label>
              <input
                value={detailData.name}
                onChange={(e) =>
                  setDetailData({ ...detailData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                value={detailData.company}
                onChange={(e) =>
                  setDetailData({ ...detailData, company: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Created Date</label>
              <input value={detailData.created} disabled />
            </div>
            <div className="form-group">
              <label>Images</label>
              <input value={detailData.images} disabled />
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={handleCloseDetail}>Close</button>
              <button className="btn-delete" onClick={handleDelete}>Delete</button>
              <button className="btn-confirm" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
