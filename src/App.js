import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import ChinaVersion from './pages/ChinaVersion';
import GlobalVersion from './pages/GlobalVersion';
import smoothscroll from 'smoothscroll-polyfill';

function App() {
  smoothscroll.polyfill();
  const [country, setCountry] = useState('');

  useEffect(() => {
    getUserGeolocationDetails();
  }, []);

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    )
      .then(response => response.json())
      .then(data => setCountry(data.country_code));
  };

  const appRef = useRef(null);

  return (
    <div className="App" ref={appRef}>
      {country === 'CN' ? (
        <ChinaVersion appRef={appRef} />
      ) : (
        <GlobalVersion appRef={appRef} />
      )}
    </div>
  );
}

export default App;
