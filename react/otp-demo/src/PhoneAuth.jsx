import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function PhoneAuth() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Khởi tạo invisible reCAPTCHA một lần
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("✅ reCAPTCHA verified:", response);
          },
          "expired-callback": () => {
            alert("⚠️ reCAPTCHA hết hạn, thử lại!");
          },
        },
        auth
      );
    }
  }, []);

  const sendOtp = async () => {
    if (!phone.startsWith("+")) {
      alert("Số điện thoại cần có định dạng quốc tế, ví dụ: +84912345678");
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP đã gửi về số " + phone);
    } catch (err) {
      console.error("Lỗi gửi OTP:", err);
      alert(err.message);
    }
  };

  const verifyOtp = async () => {
    if (!confirmationResult) {
      alert("Bạn cần gửi OTP trước!");
      return;
    }
    try {
      const result = await confirmationResult.confirm(otp);
      alert("✅ Xác thực thành công! UID: " + result.user.uid);
    } catch (err) {
      console.error("OTP không hợp lệ:", err);
      alert("❌ OTP sai hoặc hết hạn");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Xác thực OTP Firebase</h2>
      <input
        type="text"
        placeholder="+84912345678"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div id="recaptcha-container"></div>
      <button onClick={sendOtp}>Gửi OTP</button>

      <br />
      <input
        type="text"
        placeholder="Nhập OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Xác thực</button>
    </div>
  );
}
