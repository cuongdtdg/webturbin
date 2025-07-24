import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UploadPage.css';

function UploadPage({ nameProject }) {
  const navigate = useNavigate();

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log('Dropped files:', files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-page">
        <button className="back-button" onClick={() => navigate("/review")}>Back</button>


        <div className="project-header">
          <span className="project-label">Name project:</span>
          <span className="project-name">{nameProject}</span>
        </div>

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

        <div
          className="drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p>Thả thư mục/tiệp của bạn vào đây</p>
          <p>hoặc <span className="link">duyệt thư mục</span> / <span className="link">duyệt tiệp</span></p>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
