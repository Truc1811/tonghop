import './App.css';
import React, { useEffect, useState } from 'react';
import firebase from './firebase';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  useEffect(() => {
    // Gắn reCAPTCHA với đúng ID đang có trong HTML
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        console.log('reCAPTCHA solved:', response);
      },
      'expired-callback': () => {
        alert('reCAPTCHA hết hạn. Vui lòng thử lại.');
      }
    });
    window.recaptchaVerifier.render();
  }, []);

  const handleSendOtp = async () => {
    if (!phoneNumber.startsWith('+84')) {
      alert("Số điện thoại phải ở định dạng quốc tế: +84...");
      return;
    }

    const appVerifier = window.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert('OTP đã được gửi!');
      })
      .catch((error) => {
        console.error('Lỗi khi gửi OTP:', error);
        alert('Lỗi khi gửi OTP. Vui lòng thử lại.');
      });
  };

  const handleVerifyOtp = () => {
    const code = otp;

    window.confirmationResult.confirm(code)
      .then((result) => {
        const user = result.user;
        alert(`Xác thực thành công! UID: ${user.uid}`);
      })
      .catch((error) => {
        console.error('Lỗi xác thực:', error);
        alert('Xác thực OTP thất bại.');
      });
  };

  return (
    <div className="App">
      <h1>Xác thực OTP Firebase</h1>

      <input
        type="tel"
        placeholder="Nhập số điện thoại +84..."
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div id="recaptcha-container" />
      <button onClick={handleSendOtp}>Gửi OTP</button>

      <input
        type="text"
        placeholder="Nhập mã OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ marginTop: "20px" }}
      />
      <button onClick={handleVerifyOtp}>Xác thực OTP</button>
    </div>
  );
}

export default App;