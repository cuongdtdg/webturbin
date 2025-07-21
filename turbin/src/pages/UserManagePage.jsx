import React from 'react';

function UserManagePage() {
  return (
    <div>
      <div>
        <button>← Back</button>
      </div>

      <h2>User Management</h2>

      <div>
        <input type="text" placeholder="Search User" />
        <button>[Filter]</button>
        <button>Create new</button>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>E-mail</th>
            <th>Company</th>
            <th>Role</th>
            <th>Last Visit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>Nguyen</td>
            <td>ng1234@gmail.com</td>
            <td>A</td>
            <td>Technician</td>
            <td>9h21 21/7/25</td>
            <td>
              <button>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserManagePage;