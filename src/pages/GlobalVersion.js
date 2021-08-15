import '../App.css';
import React, { useState, useRef } from 'react';
import { getTranslation } from '../services/api';
import TranslatedBox from '../components/TranslatedBox';
import TranslationBox from '../components/TranslationBox';
import SelectBlock from '../components/SelectBlock';
import { languages } from '../constants';
import { Promise } from "bluebird";
import { plus } from "../images";

const GlobalVersion = (props) => {
    const [text, setText] = useState('');
    const [translationArr, setTranslationArr] = useState([]);
    const [translatedArr, setTranslatedArr] = useState([]);
    const [fromLanguage, setFromLanguage] = useState('zh-HK');
    const [toLanguage, setToLanguage] = useState('en-US');
    const [loading, setLoading] = useState(false);

    const rightContainerRef = useRef(null);

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
        if (props.appRef.current) {
            props.appRef.current.scrollTo({
                left: window.innerWidth - 32,
                top: 0,
                behavior: 'smooth'
              })
        }
        setLoading(true);
        let request = [];
        translationArr.forEach(text => request.push(getTranslation(text.text, text.from, text.to)));

        Promise.all(request)
            .then((res) => {
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

    const backToLeftContainer = () => {
        if (props.appRef.current) {
            props.appRef.current.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'
              })
        }
    }

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
                        <img src={plus} className="add-icon" alt="plus-icon" />
                    </button>
                </div>
                <div className="row">
                    <SelectBlock
                        label="From:"
                        options={languages}
                        initIndex={0}
                        setValue={setFromLanguage}
                    />
                </div>
                <div className="row">
                    <SelectBlock
                        label="To:"
                        options={languages}
                        initIndex={2}
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

            <div className="right-container" ref={rightContainerRef}>
                <p className="back-arrow-text" onClick={backToLeftContainer}>
                    <span>&#8592;</span>
                </p>
                <div className="boxes-wrapper">
                    {loading ? (<p>Loading...</p>) : (
                        <>
                            {translatedArr.map((item, idx) => (
                                <TranslatedBox
                                    key={idx}
                                    fromLanguage={languages.find(lang => lang.value === item.from).label}
                                    toLanguage={languages.find(lang => lang.value === item.to).label}
                                    originalText={item.original}
                                    translatedText={item.translation}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GlobalVersion
