// src/pages/LoginPage.jsx
import React, { useEffect, useState } from 'react'; // đã có sẵn
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
useEffect(() => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    navigate("/review"); // đã login thì tự chuyển sang trang chính
  }
}, []);

  const handleLogin = async (e) => {
    e.preventDefault(); // chặn reload trang

    try {
      const res = await fetch(
        `https://68831eb921fa24876a9cba18.mockapi.io/users?username=${username}&password=${password}`
      );
      const data = await res.json();

      if (data.length > 0) {
        const user = data[0];

        // ✅ Chỉ cho phép nếu role là admin hoặc technician
        if (user.role === "admin" || user.role === "technician") {
          localStorage.setItem("currentUser", JSON.stringify(user));
          navigate("/review"); // chuyển trang sau khi login thành công
        } else {
          setError("Bạn không có quyền truy cập. Chỉ admin hoặc technician được phép.");
        }
      } else {
        setError("Sai tên đăng nhập hoặc mật khẩu");
      }
    } catch (err) {
      console.error("Lỗi khi gọi API", err);
      setError("Lỗi kết nối đến máy chủ");
    }
  };

  return (
    <div className="login-page">
      <img
        className="login-background-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/511e3cb0e9861b7035f20692202ab4aa709aae7f?width=1676"
        alt="Industrial background"
      />

      <div className="login-form-container">
        <div className="login-form">
          <h1 className="login-title">Log in</h1>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="field-label">Your username</label>
              <div className="input-container">
                <input
                  type="text"
                  className="login-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="field-label">Your password</label>
              <div className="input-container">
                <input
                  type="password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {error && <p style={{ color: "red", marginTop: 8 }}>{error}</p>}

            <button type="submit" className="login-submit-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
