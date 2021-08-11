import React from 'react';
import './SelectBlock.css';

const SelectBlock = ({
    label,
    options,
    initIndex,
    setValue,
}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initIndex);

    return (
        <div className="select-block-wrapper">
            {label && (
                <span className="select-block-label">{label}</span>
            )}
            <div className="select-block-options-wrapper">
                {options.map((option, idx) => (
                    <div 
                        className="select-block-option" 
                        key={idx}
                        style={{
                            width: `calc(100% / ${options.length})`
                        }}
                        onClick={() => {
                            setSelectedIndex(idx);
                            setValue(option.value);
                        }}
                    >
                        <span 
                            className={idx === selectedIndex ? 'select-block-option-label option-active' : 'select-block-option-label'}
                        >
                            {option.label}
                        </span>
                    </div>
                ))}
                <div 
                    className="select-block-background-block"
                    style={{
                        width: `calc(100% / ${options.length})`,
                        left: `calc(100% / ${options.length} * ${selectedIndex})`,
                        borderTopLeftRadius: selectedIndex === 0 ? '8px' : 0,
                        borderBottomLeftRadius: selectedIndex === 0 ? '8px' : 0,
                        borderTopRightRadius: selectedIndex === options.length - 1 ? '8px' : 0,
                        borderBottomRightRadius: selectedIndex === options.length - 1 ? '8px' : 0,
                    }}
                />
            </div>
        </div>
    )
}

export default SelectBlock;
