import React from 'react'

export const Question = ({ data}) => {
    return (
        <div>
            <p>{data.question}</p>
            <p>{data.answer}</p>
        </div>
    );
}
