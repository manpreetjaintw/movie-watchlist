import React from 'react'

export default function BasicInput({
    placeholder,
    value,
    onChange,
    type,
    style, name
}) {
    return (
        <>
            <input placeholder={placeholder} value={value} onChange={onChange} name={name} style={style} type={type} />
        </>
    )
}
