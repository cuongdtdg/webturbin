import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ReviewPage.css";
import Sidebar from "../components/Sidebar";

export default function ReviewPage() {
  const [showModal, setShowModal] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [turbines, setTurbines] = useState([]);
  const [newName, setNewName] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Load turbines từ API
  const fetchTurbines = async () => {
    const res = await fetch("https://68831eb921fa24876a9cba18.mockapi.io/turbines");
    const data = await res.json();
    setTurbines(data);
  };

  useEffect(() => {
    fetchTurbines();
  }, []);

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  const handleCreateClick = () => setShowModal(true);
  const handleCancel = () => {
    setNewName("");
    setNewCompany("");
    setShowModal(false);
  };

  const handleCreate = async () => {
    const newTurbine = {
      name: newName,
      company: newCompany,
      created: new Date().toISOString().slice(0, 10),
      images: 0
    };
    await fetch("https://68831eb921fa24876a9cba18.mockapi.io/turbines", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTurbine)
    });
    fetchTurbines();
    handleCancel();
  };

  const handleDetailClick = (turbine) => setDetailData({ ...turbine });
  const handleCloseDetail = () => setDetailData(null);

  const handleSave = async () => {
    await fetch(`https://68831eb921fa24876a9cba18.mockapi.io/turbines/${detailData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(detailData)
    });
    fetchTurbines();
    handleCloseDetail();
  };

  const handleDelete = async () => {
    await fetch(`https://68831eb921fa24876a9cba18.mockapi.io/turbines/${detailData.id}`, {
      method: "DELETE"
    });
    fetchTurbines();
    handleCloseDetail();
  };

  // Lọc theo từ khóa search
  const filteredTurbines = turbines.filter(
    (tur) =>
      tur.name.toLowerCase().includes(searchTerm) ||
      tur.company.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content */}
      <main className="main-content">
        <div className="header">
          <button className="btn-create" onClick={handleCreateClick}>+ Create</button>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search turbine name or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>

        <table className="turbine-table">
          <thead>
            <tr>
              <th>Created</th>
              <th>Turbine</th>
              <th>Company</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
  {filteredTurbines.map((tur, index) => (
    <tr
      key={index}
      onClick={() =>
        navigate("/upload", {
          state: {
            nameProject: tur.name,
            company: tur.company,
            id: tur.id,
          },
        })
      }
    >
      <td>{tur.created}</td>
      <td>{tur.name}</td>
      <td>{tur.company}</td>
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
        <div className="modal-backdrop">
          <div className="form-wrapper">
            <h3>Create Turbine</h3>
            <input
              type="text"
              placeholder="Turbine Name"
              className="form-input"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company"
              className="form-input"
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
            />
            <div className="form-buttons">
              <button className="form-cancel" onClick={handleCancel}>Cancel</button>
              <button className="form-submit" onClick={handleCreate}>Create</button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {detailData && (
        <div className="modal-backdrop">
          <div className="form-wrapper">
            <h3>Turbine Detail</h3>
            <input
              type="text"
              value={detailData.name}
              onChange={(e) => setDetailData({ ...detailData, name: e.target.value })}
              className="form-input"
            />
            <input
              type="text"
              value={detailData.company}
              onChange={(e) => setDetailData({ ...detailData, company: e.target.value })}
              className="form-input"
            />
            <input type="text" value={detailData.created} className="form-input" disabled />
            <input type="text" value={detailData.images} className="form-input" disabled />
            <div className="form-buttons">
              <button className="form-cancel" onClick={handleCloseDetail}>Close</button>
              <button className="form-delete" onClick={handleDelete}>Delete</button>
              <button className="form-submit" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
