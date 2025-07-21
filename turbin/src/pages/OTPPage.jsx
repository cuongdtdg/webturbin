import React from 'react';
import '../styles/OtpPage.css';

export default function OTPPage() {
  return (
    <div className="otp-page">
      <div className="otp-container">
        <h1 className="otp-title">Enter OTP</h1>

        <form className="otp-form">
          <div className="otp-input-container">
            <input
              type="text"
              className="otp-input"
              maxLength="6"
              placeholder="Enter 6-digit OTP"
              disabled={false}
            />
          </div>

          {/* Nếu có lỗi thì hiển thị ở đây */}
          <div className="error-message">Lỗi sẽ hiển thị ở đây</div>

          <button type="submit" className="otp-submit-button" disabled={false}>
            Enter
          </button>
        </form>

        <button className="resend-button" disabled={false}>
          Gửi lại
        </button>
      </div>
    </div>
  );
}
