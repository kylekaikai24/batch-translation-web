import '../App.css';
import React, { useState, useEffect } from 'react';
import { getBaiduTranslation } from '../services/api';
import TranslatedBox from '../components/TranslatedBox';
import TranslationBox from '../components/TranslationBox';
import SelectBlock from '../components/SelectBlock';
import { baiduLanguages } from '../constants';
import { Promise } from "bluebird";

const ChinaVersion = () => {
    const [text, setText] = useState('');
    const [translationArr, setTranslationArr] = useState([]);
    const [translatedArr, setTranslatedArr] = useState([]);
    const [fromLanguage, setFromLanguage] = useState('zh');
    const [toLanguage, setToLanguage] = useState('en');
    const [loading, setLoading] = useState(false);

    const onAddClick = () => {
        setTranslationArr([...translationArr, {
            from: fromLanguage,
            to: toLanguage,
            text,
        }]);
        setText('');
    };

    const onRemoveClick = (index) => {
        const array = [...translationArr];
        array.splice(index, 1);
        setTranslationArr(array);
    };

    const onTranslateClick = () => {
        setLoading(true);
        // let request = [];
        // // translationArr.forEach(text => request.push(getTranslation(text.text, text.from, text.to)));
        // translationArr.forEach(text => request.push(getBaiduTranslation(text.text, text.from, text.to)));

        // Promise.all(request)
        Promise.all(getBaiduTranslation(translationArr))
            .then((res) => {
                console.log(translationArr);
                console.log(res);
                setTranslatedArr(res);
                return res;
            })
            .finally(() => setLoading(false));
    };

    const onResetClick = () => {
        setTranslationArr([]);
        setTranslatedArr([]);
        setText('');
    };

    const onEditConfirmClick = (index, info) => {
        const array = [...translationArr];
        array[index] = info;
        setTranslationArr(array);
    }

    console.log(toLanguage)

    return (
        <div className="container">
            <div className="left-container">
                <div className="input-section-wrapper">
                    <input
                        type="text"
                        className="text-input"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Type here..."
                    />
                    <button className="add-button" onClick={onAddClick}>
                        <img src="https://kylekaikai24.github.io/batch-translation-web/images/plus.svg" className="add-icon" alt="plus-icon" />
                    </button>
                </div>
                <div className="row">
                    <SelectBlock
                        label="From:"
                        options={baiduLanguages}
                        initIndex={0}
                        setValue={setFromLanguage}
                    />
                </div>
                <div className="row">
                    <SelectBlock
                        label="To:"
                        options={baiduLanguages}
                        initIndex={1}
                        setValue={setToLanguage}
                    />
                </div>
                <div className="row">
                    <button onClick={onTranslateClick} className="translate-button">Translate</button>
                    <button onClick={onResetClick} className="reset-button">Reset</button>
                </div>
                <div className="boxes-wrapper">
                    {translationArr.map((item, idx) => (
                        <TranslationBox
                            index={idx}
                            item={item}
                            onRemoveClick={onRemoveClick}
                            onEditConfirmClick={onEditConfirmClick}
                        />
                    ))}
                </div>
            </div>

            <div className="right-container">
                <div className="boxes-wrapper">
                    {loading ? (<p>Loading...</p>) : (
                        <>
                            {translatedArr.map((item, idx) => (
                                <TranslatedBox
                                    key={idx}
                                    fromLanguage={baiduLanguages.find(lang => lang.value === item.from).label}
                                    toLanguage={baiduLanguages.find(lang => lang.value === item.to).label}
                                    originalText={item.original}
                                    translatedText={item.translation}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChinaVersion
