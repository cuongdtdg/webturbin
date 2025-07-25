import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/UploadPage.css';
import Sidebar from "../components/Sidebar";
function UploadPage() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
  if (!location.state?.nameProject) {
    alert("No turbine selected. Redirecting...");
    navigate("/review");
  }
}, []);
  const nameProject = location.state?.nameProject || "Unknown";

  const getActiveTab = (path) => {
    if (path.startsWith("/setting")) return "user";
    if (path.startsWith("/review")) return "dashboard";
    if (path.startsWith("/filter")) return "review";
    if (path.startsWith("/user")) return "manage";
    if (path.startsWith("/upload")) return "dashboard"; // Gán upload thuộc Dashboard
    return "";
  };

  const activeTab = getActiveTab(location.pathname);

  const handleNavigate = (tab, path) => {
    navigate(path);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log('Dropped files:', files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
  <ul className="menu">
    <li
      className={activeTab === 'user' ? 'active' : ''}
      onClick={() => handleNavigate('user', '/setting')}
    >
      User
    </li>

    <li
      className={activeTab === 'dashboard' ? 'active' : ''}
      onClick={() => handleNavigate('dashboard', '/review')}
    >
      Dashboard
    </li>

    <li
      className={activeTab === 'review' ? 'active' : ''}
      onClick={() => handleNavigate('review', '/filter')}
    >
      Review
    </li>

    {/* Chỉ hiện User Manage nếu là manager */}
    {JSON.parse(localStorage.getItem('currentUser'))?.role === 'admin' && (
      <li
        className={activeTab === 'manage' ? 'active' : ''}
        onClick={() => handleNavigate('manage', '/user')}
      >
        User Manage
      </li>
    )}
  </ul>
</aside>

      {/* Main content */}
      <div className="upload-page">
        {/* Project name */}
        <div className="project-header">
          <span className="project-label">Turbine:</span>
          <span className="project-name">{nameProject}</span>
        </div>

        {/* Upload actions */}
        <div className="actions">
          <div className="card">
            <button className="card-btn" onClick={() => console.log('Upload files')}>
              <h3>Upload files</h3>
              <p>Select an upload method below</p>
            </button>
          </div>
          <div className="card">
            <button className="card-btn" onClick={() => console.log('Upload folder')}>
              <h3>Upload Folder</h3>
              <p>Upload folder with images</p>
            </button>
          </div>
          <div className="card">
            <button className="card-btn" onClick={() => console.log('Asset history')}>
              <h3>Asset History</h3>
            </button>
          </div>
          <div className="card">
            <button className="card-btn" onClick={() => console.log('Check')}>
              <h3>Check</h3>
            </button>
          </div>
        </div>

        {/* Drop Zone */}
        <div
          className="drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p>Thả thư mục/tiệp của bạn vào đây</p>
          <p>
            hoặc <span className="link">duyệt thư mục</span> / <span className="link">duyệt tiệp</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
