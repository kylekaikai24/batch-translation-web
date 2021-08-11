import axios from './AxiosInstance';

const getTranslation = async (string, from, to) => {
    const res = await axios.get(`get?q=${encodeURIComponent(string)}&langpair=${from}|${to}`);
    return {
        from: from,
        to: to,
        original: string,
        translation: res.data.responseData.translatedText
    };
};

export {
    getTranslation
};