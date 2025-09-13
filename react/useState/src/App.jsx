import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAHP8Ipj9kR39hjIeXxPCeFxAoQ2J6LGo",
  authDomain: "otp-app-demo-dd492.firebaseapp.com",
  projectId: "otp-app-demo-dd492",
  storageBucket: "otp-app-demo-dd492.firebasestorage.app",
  messagingSenderId: "120960700585",
  appId: "1:120960700585:web:0ec43fa80ebac1901e99b8",
  measurementId: "G-ZP35QBY010"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function PhoneAuth() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Khởi tạo Recaptcha chỉ 1 lần khi component mount
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => console.log("Recaptcha resolved"),
      });
    }
  }, []);

  // Gửi OTP
  const sendOtp = () => {
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        alert("OTP đã được gửi!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Xác nhận OTP
  const verifyOtp = () => {
    if (!confirmationResult) return;

    confirmationResult
      .confirm(otp)
      .then((result) => {
        alert("Xác thực thành công!");
        console.log(result.user);
      })
      .catch((error) => {
        alert("Sai OTP!");
        console.error(error);
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Xác thực số điện thoại bằng OTP</h2>

      <input
        type="text"
        placeholder="+84xxxxxxxxx"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Gửi OTP</button>

      <div id="recaptcha-container"></div>

      <input
        type="text"
        placeholder="Nhập OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Xác nhận OTP</button>
    </div>
  );
}
