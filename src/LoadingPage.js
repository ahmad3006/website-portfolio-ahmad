import React, { useState, useEffect } from 'react';
import './LoadingPage.css'; // Import file CSS untuk style

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading
    setTimeout(() => {
      setLoading(false); // Setelah 3 detik, loading selesai
    }, 3000);
  }, []);

  return (
    <div className={`loading-page ${loading ? 'loading' : 'loaded'}`}>
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
