import React from 'react';
import { languages, baiduLanguages } from '../constants';
import useCountry from './useCountry';

const useLanguages = () => {
    const country = useCountry();

    return (country === 'CN' ? baiduLanguages : languages);
}

export default useLanguages;
