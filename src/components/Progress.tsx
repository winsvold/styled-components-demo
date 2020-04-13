import React from 'react';
import './progress.css';

interface Props {
    value: number;
    max: number;
}

function Progress(props: Props) {
    return (
        <div className="progressStyle">
            {props.value} / {props.max}
        </div>
    );
}

export default Progress;
