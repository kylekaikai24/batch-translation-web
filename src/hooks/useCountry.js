import React, { useState, useEffect } from 'react'

const useCountry = () => {
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

    return country;
}

export default useCountry;
