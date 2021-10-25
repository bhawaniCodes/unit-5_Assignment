import React from 'react'

interface ButtonProps {
    onClick: () => void;
    label: string;
}

export const Button = ({onClick, label }: ButtonProps) => {
    return (
        <div>
            <button onClick={onClick}>{ label}</button>
        </div>
    )
}
