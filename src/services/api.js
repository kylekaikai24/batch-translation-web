import axios from './AxiosInstance';
import md5 from 'md5';

const getTranslation = async (string, from, to) => {
    const res = await axios.get(`get?q=${encodeURIComponent(string)}&langpair=${from}|${to}`);
    return {
        from: from,
        to: to,
        original: string,
        translation: res.data.responseData.translatedText
    };
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getBaiduTranslation = async (array, string, from, to) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const salt = Math.floor(Math.random() * 1000000);
        const sign = md5(`20210813000915570${array[i].text}${salt}mbvfV5YloIuJu0Mh0WcD`);
        const res = await axios.get(
            `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${array[i].text}&from=${array[i].from}&to=${array[i].to}&appid=20210813000915570&salt=${salt}&sign=${sign}`,
            {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            }
        );
        newArray.push({
            from: array[i].from,
            to: array[i].to,
            original: array[i].text,
            translation: res.data.trans_result[0].dst
        });
        await sleep(1000);
    };
    return newArray;
}

export {
    getTranslation,
    getBaiduTranslation,
};