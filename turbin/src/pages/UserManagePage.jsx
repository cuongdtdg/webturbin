import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserManagePage.css';
import Sidebar from "../components/Sidebar";

function UserManagePage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("manage");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showDetailForm, setShowDetailForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    company: '',
    password: '',
    role: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://68831eb921fa24876a9cba18.mockapi.io/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => {
        console.error("Failed to fetch users:", err);
        alert("Không thể tải danh sách người dùng.");
      });
  }, []);

  useEffect(() => {
    setFilteredUsers(applySearch(users, searchQuery));
  }, [users, searchQuery]);

  const applySearch = (userList, query) => {
    return userList.filter(user =>
      user.username.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.company.toLowerCase().includes(query.toLowerCase()) ||
      user.role.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const generateNextId = () => {
    const maxId = users.reduce((max, user) => {
      const num = parseInt(user.id);
      return isNaN(num) ? max : Math.max(max, num);
    }, 0);
    return String(maxId + 1).padStart(6, '0');
  };

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  const handleCreateUser = () => {
    const { username, email, company, password, role } = formData;
    if (!username || !email || !company || !password || !role) {
      alert("Please fill in all fields.");
      return;
    }

    const isDuplicate = users.some(
      user => user.username === username || user.email === email
    );
    if (isDuplicate) {
      alert("Username or email already exists.");
      return;
    }

    const newUser = {
      ...formData,
      id: generateNextId()
    };

    fetch("https://68831eb921fa24876a9cba18.mockapi.io/users", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(createdUser => {
        const updated = [...users, createdUser];
        setUsers(updated);
        setSearchQuery(""); // reset search để user mới hiển thị
        setShowCreateForm(false);
        setFormData({ username: '', email: '', company: '', password: '', role: '' });
      })
      .catch(err => {
        console.error("Error creating user:", err);
        alert("Failed to create user.");
      });
  };

  const handleUpdateUser = () => {
    if (!selectedUser) return;

    const duplicate = users.some(user =>
      (user.username === selectedUser.username || user.email === selectedUser.email) &&
      user.id !== selectedUser.id
    );
    if (duplicate) {
      alert("Username or email already exists.");
      return;
    }

    const payload = { ...selectedUser };
    if (!payload.password) delete payload.password;

    fetch(`https://68831eb921fa24876a9cba18.mockapi.io/users/${selectedUser.id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(updatedUser => {
        const updatedUsers = users.map(user =>
          user.id === updatedUser.id ? updatedUser : user
        );
        setUsers(updatedUsers);
        setShowDetailForm(false);
        setSelectedUser(null);
      })
      .catch(err => {
        console.error("Update failed:", err);
        alert("Failed to update user.");
      });
  };

  const handleDeleteUser = () => {
    if (!window.confirm("Are you sure to delete this user?")) return;

    fetch(`https://68831eb921fa24876a9cba18.mockapi.io/users/${selectedUser.id}`, {
      method: "DELETE"
    })
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== selectedUser.id);
        setUsers(updatedUsers);
        setShowDetailForm(false);
        setSelectedUser(null);
      })
      .catch(err => {
        console.error("Delete failed:", err);
        alert("Failed to delete user.");
      });
  };

  const handleCancelCreate = () => {
    setShowCreateForm(false);
    setFormData({ username: '', email: '', company: '', password: '', role: '' });
  };

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="user-manage-content">
        <div className="user-manage-topbar">
          <input
            type="text"
            placeholder="Search User"
            className="user-search-input"
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
          />
          <div className="user-manage-buttons">
            <button className="filter-button">Filter</button>
            <button className="create-button" onClick={() => setShowCreateForm(true)}>Create</button>
          </div>
        </div>

        <div className="user-table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Company</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr><td colSpan="6">No users found.</td></tr>
              ) : (
                filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.company}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="detail-button" onClick={() => {
                        setSelectedUser(user);
                        setShowDetailForm(true);
                      }}>
                        Detail
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {showCreateForm && (
          <div className="modal-overlay">
            <div className="form-wrapper">
              <h3>Create User</h3>
              <input type="text" placeholder="Username" className="form-input" autoComplete="off"
                value={formData.username}
                onChange={e => setFormData({ ...formData, username: e.target.value })}
              />
              <input type="email" placeholder="Email" className="form-input" autoComplete="off"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
              <input type="text" placeholder="Company" className="form-input"
                value={formData.company}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
              />
              <input type="password" placeholder="Password" className="form-input" autoComplete="off"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
              />
              <select className="form-input"
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="" disabled>Select Role</option>
                <option value="admin">Admin</option>
                <option value="technician">Technician</option>
              </select>
              <div className="form-buttons">
                <button className="form-submit" onClick={handleCreateUser}>Create</button>
                <button className="form-cancel" onClick={handleCancelCreate}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {showDetailForm && selectedUser && (
          <div className="modal-overlay">
            <div className="form-wrapper">
              <h3>User Detail</h3>
              <input type="text" className="form-input"
                value={selectedUser.username}
                onChange={e => setSelectedUser({ ...selectedUser, username: e.target.value })}
              />
              <input type="email" className="form-input"
                value={selectedUser.email}
                onChange={e => setSelectedUser({ ...selectedUser, email: e.target.value })}
              />
              <input type="text" className="form-input"
                value={selectedUser.company}
                onChange={e => setSelectedUser({ ...selectedUser, company: e.target.value })}
              />
              <input type="password" className="form-input" autoComplete="off"
                placeholder="Password (leave blank to keep)"
                value={selectedUser.password || ""}
                onChange={e => setSelectedUser({ ...selectedUser, password: e.target.value })}
              />
              <select className="form-input"
                value={selectedUser.role}
                onChange={e => setSelectedUser({ ...selectedUser, role: e.target.value })}
              >
                <option value="admin">Admin</option>
                <option value="technician">Technician</option>
              </select>
              <div className="form-buttons">
                <button className="form-submit" onClick={handleUpdateUser}>Save</button>
                <button className="form-delete" onClick={handleDeleteUser}>Delete</button>
                <button className="form-cancel" onClick={() => {
                  setShowDetailForm(false);
                  setSelectedUser(null);
                }}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserManagePage;
