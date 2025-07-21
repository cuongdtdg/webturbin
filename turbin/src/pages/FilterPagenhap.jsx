import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEFECT_POSITIONS, SEVERITY_LEVELS, INSPECTORS } from '../utils/constants';
import '../styles/FilterPage.css';

const FilterPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    dateRange: {
      start: '20-7-2025',
      end: '20-8-2025'
    },
    defectPosition: '',
    severityLevel: '',
    inspector: ''
  });

  const [showDropdowns, setShowDropdowns] = useState({
    position: false,
    severity: false,
    inspector: false
  });

  const handleBack = () => {
    navigate('/review');
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleDropdown = (dropdown) => {
    setShowDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const handleApplyFilters = () => {
    // Apply filters and navigate back
    console.log('Applied filters:', filters);
    navigate('/review', { state: { filters } });
  };

  return (
    <div className="filter-page">
      {/* Back button */}
      <div className="filter-header">
        <div className="back-section">
          <button className="back-button" onClick={handleBack}>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
              <path d="M35.625 22.5H9.375M9.375 22.5L22.5 35.625M9.375 22.5L22.5 9.375" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="back-text">Back</span>
        </div>

        <h1 className="filter-title">Filter</h1>
      </div>

      {/* Date range filter */}
      <div className="date-filter-section">
        <div className="date-range-container">
          <span className="date-range-text">{filters.dateRange.start} - {filters.dateRange.end}</span>
          <button className="calendar-button">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M32 4V12M16 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Filter options */}
      <div className="filter-options">
        {/* Defect Position */}
        <div className="filter-group">
          <div className="filter-dropdown" onClick={() => toggleDropdown('position')}>
            <span className="filter-label">Vị trí lỗi</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z" fill="#1D1B20"/>
            </svg>
          </div>

          {showDropdowns.position && (
            <div className="dropdown-menu position-dropdown">
              {DEFECT_POSITIONS.map((position) => (
                <div
                  key={position.value}
                  className="dropdown-item"
                  onClick={() => {
                    handleFilterChange('defectPosition', position.value);
                    toggleDropdown('position');
                  }}
                >
                  {position.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Severity Level */}
        <div className="filter-group">
          <div className="filter-dropdown" onClick={() => toggleDropdown('severity')}>
            <span className="filter-label">Mức độ lỗi</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z" fill="#1D1B20"/>
            </svg>
          </div>

          {showDropdowns.severity && (
            <div className="dropdown-menu severity-dropdown">
              {SEVERITY_LEVELS.map((level) => (
                <div
                  key={level.value}
                  className="dropdown-item"
                  onClick={() => {
                    handleFilterChange('severityLevel', level.value);
                    toggleDropdown('severity');
                  }}
                >
                  {level.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Inspector */}
        <div className="filter-group">
          <div className="filter-dropdown" onClick={() => toggleDropdown('inspector')}>
            <span className="filter-label">Người kiểm tra</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z" fill="#1D1B20"/>
            </svg>
          </div>

          {showDropdowns.inspector && (
            <div className="dropdown-menu inspector-dropdown">
              {INSPECTORS.map((inspector) => (
                <div
                  key={inspector.value}
                  className="dropdown-item"
                  onClick={() => {
                    handleFilterChange('inspector', inspector.value);
                    toggleDropdown('inspector');
                  }}
                >
                  {inspector.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Current filter selections */}
      <div className="current-filters">
        {filters.defectPosition && (
          <div className="filter-tag">
            Position: {DEFECT_POSITIONS.find(p => p.value === filters.defectPosition)?.label}
            <button onClick={() => handleFilterChange('defectPosition', '')}>×</button>
          </div>
        )}
        {filters.severityLevel && (
          <div className="filter-tag">
            Severity: {SEVERITY_LEVELS.find(s => s.value === filters.severityLevel)?.label}
            <button onClick={() => handleFilterChange('severityLevel', '')}>×</button>
          </div>
        )}
        {filters.inspector && (
          <div className="filter-tag">
            Inspector: {INSPECTORS.find(i => i.value === filters.inspector)?.label}
            <button onClick={() => handleFilterChange('inspector', '')}>×</button>
          </div>
        )}
      </div>

      {/* Apply button */}
      <div className="filter-actions">
        <button className="apply-filters-button" onClick={handleApplyFilters}>
          Apply Filters
        </button>
        <button className="clear-filters-button" onClick={() => setFilters({
          dateRange: { start: '20-7-2025', end: '20-8-2025' },
          defectPosition: '',
          severityLevel: '',
          inspector: ''
        })}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default FilterPage;
