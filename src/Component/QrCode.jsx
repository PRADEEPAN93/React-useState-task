import React, { useState } from "react";

export const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("Hello World");
  const [qrSize, setQrSize] = useState("150");

  async function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${qrData}`;
      setImg(url);
    } catch (error) {
      console.log("Error generating QR code", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "QRCode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log("Error downloading QR code", error);
      });
  }

  return (
    <div className="page-wrapper">
      <div className="qr-card">
        <h1>✨ QR Code Generator ✨</h1>

        {loading && <p className="loading">Please wait...</p>}

        {img && <img src={img} alt="QR Code" className="qr-image" />}

        <div className="form-group">
          <label></label>
          <input
            type="text"
            value={qrData}
            onChange={(e) => setQrData(e.target.value)}
            placeholder="Enter data here..."
          />
        </div>

        <div className="form-group">
          <label>QR Code Size</label>
          <input
            type="number"
            value={qrSize}
            onChange={(e) => setQrSize(e.target.value)}
            placeholder="150"
          />
        </div>

        <div className="button-container">
          <button className="btn generate" onClick={generateQR}>
            Generate
          </button>
          <button className="btn download" onClick={downloadQR}>
            Download
          </button>
        </div>

        <p className="footer">
          Designed by <span className="highlight">DarkCoder</span>
        </p>
      </div>
    </div>
  );
};
