import React from 'react';

export default function ReviewPage() {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <div>
        <h2>LOGO</h2>
        <ul>
          <li>Dashboard</li>
          <li>Review</li>
          <li>User Manage</li>
        </ul>
      </div>

      {/* Main content */}
      <div>
        {/* Header */}
        <div>
          <h1>Review Turbines</h1>
          <button>Create</button>
        </div>

        {/* Search bar */}
        <div>
          <input type="text" placeholder="Search turbine name or company..." />
        </div>

        {/* Table */}
        <table>
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
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2025-07-20</td>
              <td>Turbine B (Company Y)</td>
              <td>2</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Modal popup (hiển thị luôn) */}
        <div>
          <h2>Create New Turbine</h2>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Enter name" />
          </div>
          <div>
            <label>Company</label>
            <input type="text" placeholder="Enter company" />
          </div>
          <div>
            <button>Cancel</button>
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
