import React from 'react';

export default function Results(props) {
    return(
        <div className="result">
            <p>You'll need</p>
            <h2 className="light-blue">{props.shares} Shares</h2>
            <p>With a dividend of ${props.dividend} to generate an income of ${props.expenses} a year. It will cost you ${props.investment}</p>
        </div>
    )
}