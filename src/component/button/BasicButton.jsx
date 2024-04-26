import * as React from 'react';

export const BasicButton = ({
    handleClick,
    color,
    title,
    style, 
    disabled
}) => {
    return (
        <>
            <button onClick={handleClick} color={color} disabled={disabled}  style={style}>{title}</button>
        </>
    );
}