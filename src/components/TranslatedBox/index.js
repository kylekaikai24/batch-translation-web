import React from 'react';
import './TranslatedBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TranslatedBox = ({
    fromLanguage,
    toLanguage,
    originalText,
    translatedText,
}) => {
    const [copied, setCopied] = React.useState(false);
    return (
        <div className="box">
            <div style={{ width: "100%" }}>
                <p className="text">{fromLanguage} &#8594; {toLanguage}</p>
                <p className="text">{originalText}</p>
                <div className="translated-text-row">
                    <p className="text translated-text">{translatedText}</p>
                    <CopyToClipboard text={translatedText}
                        onCopy={() => setCopied(true)}>
                        <button className="copy-button">
                            <img src="https://kylekaikai24.github.io/batch-translation-web/images/copy.svg" className="copy-icon" alt="copy" />
                        </button>
                    </CopyToClipboard>
                </div>
                {copied && (
                    <span className="copied-text">Copied !</span>
                )}
            </div>
        </div>
    )
}

export default TranslatedBox
