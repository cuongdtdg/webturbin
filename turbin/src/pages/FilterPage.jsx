import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FilterPage.css';
import Sidebar from "../components/Sidebar";
function FilterPage() {
  const [activeTab, setActiveTab] = useState("review");
  const navigate = useNavigate();

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <div className="app-layout">
      {/* Sidebar thay cho nút back */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main filter content */}
      <main className="filter-container">
        <h2>Filter</h2>

        <div className="filter-group">
          <label>Vị trí lỗi:</label>
          <select>
            <option>PS (Pressure Side)</option>
            <option>SS (Suction Side)</option>
            <option>LE (Leading Edge)</option>
            <option>TE (Trailing Edge)</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Mức độ lỗi:</label>
          <select>
            <option>Level 1</option>
            <option>Level 2</option>
            <option>Level 3</option>
            <option>Level 4</option>
            <option>Level 5</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Người thêm ảnh:</label>
          <select>
            <option>user1</option>
            <option>user2</option>
            <option>user3</option>
            <option>user4</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Công ty:</label>
          <select>
            <option>Company A</option>
            <option>Company B</option>
            <option>Company C</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Ngày thêm ảnh:</label>
          <div className="date-range">
            <input type="date" />
            <span>đến</span>
            <input type="date" />
          </div>
        </div>

        <div className="filter-actions">
          <button className="apply-button">Áp dụng lọc</button>
          <button className="clear-button">Xóa lọc</button>
        </div>
      </main>
    </div>
  );
}

export default FilterPage;
