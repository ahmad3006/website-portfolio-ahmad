import React, { useState, useEffect } from "react";
import "./LoadingPage.css";
//import ThreeDScene from "./ThreeDScene"; // Import komponen 3D

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="loading-page">
      {loading ? (
        <div className="loading-content">
          <p>Loading...</p>
          <p className="page-number">Page 1</p>
        </div>
      ) : (
        <div className="content-loaded">
          <p>Welcome to My Portfolio!</p>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
