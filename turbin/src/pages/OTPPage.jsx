import React from "react";
import "../styles/OtpPage.css";

function OTPPage() {
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d$/.test(value)) {
      e.target.value = ""; // Xoá nếu không phải số
      return;
    }

    // Nhảy sang ô tiếp theo
    const next = document.querySelector(`.otp-box[data-index='${index + 1}']`);
    if (next) next.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value) {
      const prev = document.querySelector(`.otp-box[data-index='${index - 1}']`);
      if (prev) prev.focus();
    }
  };

  return (
    <div className="otp-page">
      <div className="otp-container">
        <h1 className="otp-title">Enter OTP</h1>

        <form className="otp-form">
          <div className="otp-input-boxes">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                data-index={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                className="otp-box"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <div className="error-message">Lỗi</div>

          <button type="submit" className="otp-submit-button">
            Enter
          </button>
        </form>

        <button className="resend-button">Gửi lại</button>
      </div>
    </div>
  );
}

export default OTPPage;
