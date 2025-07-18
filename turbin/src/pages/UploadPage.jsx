import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/UploadPage.css";

const UploadPage = () => {
  const [projectName, setProjectName] = useState("");

  const handleFileUpload = (e) => {
    const files = e.target.files;
    console.log("Files selected:", files);
  };

  const handleFolderUpload = (e) => {
    const files = e.target.files;
    console.log("Folder selected:", files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log("Files dropped:", files);
  };

  return (
    <div className="upload-page">
      <Sidebar />

      <div className="main-content">
        <div className="top-navigation">
          <div className="nav-buttons">
            <input
              type="text"
              className="name-project-input"
              placeholder="Name project"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <button className="upload-nav-button">
              <span>Upload</span>
            </button>
          </div>
        </div>

        <div className="upload-container">
          <div
            className="upload-area"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="upload-center-content">
              <div className="upload-icon">
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="28"
                    height="27"
                    rx="13.5"
                    stroke="white"
                  />
                  <path
                    d="M13.2916 18.6667V9.15842L10.1499 12.1917L8.45825 10.5001L14.4999 4.66675L20.5416 10.5001L18.8499 12.1917L15.7083 9.15842V18.6667H13.2916ZM7.24992 23.3334C6.58534 23.3334 6.01641 23.1049 5.54315 22.648C5.06988 22.1911 4.83325 21.6417 4.83325 21.0001V17.5001H7.24992V21.0001H21.7499V17.5001H24.1666V21.0001C24.1666 21.6417 23.93 22.1911 23.4567 22.648C22.9834 23.1049 22.4145 23.3334 21.7499 23.3334H7.24992Z"
                    fill="#1D1B20"
                  />
                </svg>
              </div>
              <p className="upload-text">
                Drop your folder/files here or browse folder / browse files
              </p>
            </div>
          </div>
        </div>

        <div className="upload-options">
          <div className="upload-files-section">
            <div className="upload-files-header">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 22C9.96667 22 8.66667 21.4667 7.6 20.4C6.53333 19.3333 6 18.0333 6 16.5V6C6 4.9 6.39167 3.95833 7.175 3.175C7.95833 2.39167 8.9 2 10 2C11.1 2 12.0417 2.39167 12.825 3.175C13.6083 3.95833 14 4.9 14 6V15.5C14 16.2 13.7583 16.7917 13.275 17.275C12.7917 17.7583 12.2 18 11.5 18C10.8 18 10.2083 17.7583 9.725 17.275C9.24167 16.7917 9 16.2 9 15.5V6H10.5V15.5C10.5 15.7833 10.5958 16.0208 10.7875 16.2125C10.9792 16.4042 11.2167 16.5 11.5 16.5C11.7833 16.5 12.0208 16.4042 12.2125 16.2125C12.4042 16.0208 12.5 15.7833 12.5 15.5V6C12.5 5.3 12.2583 4.70833 11.775 4.225C11.2917 3.74167 10.7 3.5 10 3.5C9.3 3.5 8.70833 3.74167 8.225 4.225C7.74167 4.70833 7.5 5.3 7.5 6V16.5C7.5 17.6 7.89167 18.5417 8.675 19.325C9.45833 20.1083 10.4 20.5 11.5 20.5C12.6 20.5 13.5417 20.1083 14.325 19.325C15.1083 18.5417 15.5 17.6 15.5 16.5V6H17V16.5C17 18.0333 16.4667 19.3333 15.4 20.4C14.3333 21.4667 13.0333 22 11.5 22Z"
                  fill="#1D1B20"
                />
              </svg>
              <div className="upload-files-content">
                <h3 className="upload-files-title">Upload files</h3>
                <p className="upload-files-subtitle">
                  Select an upload method below
                </p>
              </div>
            </div>
            <input
              type="file"
              id="file-upload"
              multiple
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <label htmlFor="file-upload" className="upload-files-button">
              Select Files
            </label>
          </div>

          <div className="upload-folder-section">
            <div className="upload-folder-header">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H10L12 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V8H11.175L9.175 6H4V18Z"
                  fill="#1D1B20"
                />
              </svg>
              <div className="upload-folder-content">
                <h3 className="upload-folder-title">Upload Folder</h3>
                <p className="upload-folder-subtitle">
                  Upload folder with images
                </p>
              </div>
            </div>
            <input
              type="file"
              id="folder-upload"
              webkitdirectory="true"
              directory="true"
              multiple
              onChange={handleFolderUpload}
              style={{ display: "none" }}
            />
            <label htmlFor="folder-upload" className="upload-folder-button">
              Select Folder
            </label>
          </div>

          <div className="asset-history-section">
            <button className="asset-history-button">
              <span>Asset History</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
