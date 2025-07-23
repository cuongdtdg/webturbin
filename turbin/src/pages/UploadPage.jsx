import React from 'react';
import "../styles/UploadPage.css";

function UploadPage({ nameProject }) {
  return (
    <div className="upload-wrapper">
      <div className="upload-page">

        <button className="back-button">← Back</button>

        <div className="project-header">
          <span className="project-label">Name project:</span>
          <span className="project-name">{nameProject}</span>
        </div>

        <div className="actions">
          <div className="card">
            <button className="card-btn">
              <h3>Upload files</h3>
              <p>Select an upload method below</p>
            </button>
          </div>
          <div className="card">
            <button className="card-btn">
              <h3>Upload Folder</h3>
              <p>Upload folder with images</p>
            </button>
          </div>
          <div className="card">
            <button className="card-btn">
              <h3>Asset History</h3>
            </button>
          </div>
          <div className="card">
            <button className="card-btn">
              <h3>Check</h3>
            </button>
          </div>
        </div>

        <div className="drop-zone">
          <p>Thả thư mục/tiệp của bạn vào đây</p>
          <p>hoặc <span className="link">duyệt thư mục</span> / <span className="link">duyệt tiệp</span></p>
        </div>

      </div>
    </div>
  );
}

export default UploadPage;
