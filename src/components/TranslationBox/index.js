import React from 'react';
// import { languages, baiduLanguages } from '../../constants';
import useLanguages from '../../hooks/useLanguages';
import './TranslationBox.css';

const TranslationBox = ({
    index,
    item,
    onRemoveClick,
    onEditConfirmClick,
}
) => {
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [fromLang, setFromLang] = React.useState(item.from);
    const [toLang, setToLang] = React.useState(item.to);
    const [text, setText] = React.useState(item.text);

    const languages = useLanguages();

    return (
        <div className="box" key={index} style={{ flexWrap: 'wrap' }}>
            {
                isEditMode ? (
                    <>
                        <div className="translation-box-row">
                            <p className="text"
                                style={{ width: '100%', flex: 'auto', margin: '1rem 0 0 0' }}
                            >
                                <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
                                    {languages.map((lang, idx) => (
                                        <option key={idx} value={lang.value}>{lang.label}</option>
                                    ))}
                                </select> {' '}
                                &#8594;
                                {' '}<select value={toLang} onChange={(e) => setToLang(e.target.value)}>
                                    {languages.map((lang, idx) => (
                                        <option key={idx} value={lang.value}>{lang.label}</option>
                                    ))}
                                </select>
                            </p>
                        </div>
                        <input type="text" className="text-input" style={{marginTop: '0.5rem'}} value={text} onChange={(e) => setText(e.target.value)} />
                        <button
                            className="tick-button"
                            onClick={() => {
                                onEditConfirmClick(index, { from: fromLang, to: toLang, text: text });
                                setIsEditMode(false)
                            }}
                        >
                            <img src="/images/check.svg" className="tick-icon" alt="tick-icon" />
                        </button>
                    </>
                ) : (
                    <>
                        <div className="translation-box-row">
                            <p className="text"
                                style={{ width: '100%', flex: 'auto', margin: '1rem 0 0 0' }}
                            >
                                {languages.find(lang => lang.value === item.from).label} &#8594; {languages.find(lang => lang.value === item.to).label}
                            </p>
                            <button className="edit-button" onClick={() => setIsEditMode(true)}>
                                <img src="/images/edit.svg" className="edit-icon" alt="edit-icon" />
                            </button>
                        </div>
                        <p className="text">{item.text}</p>
                        <button className="remove-button" onClick={() => onRemoveClick(index)}>
                            <img src="/images/remove.svg" className="remove-icon" alt="remove-icon" />
                        </button>
                    </>
                )
            }

        </div>
    )
}

export default TranslationBox;
