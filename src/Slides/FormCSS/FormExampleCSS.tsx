import * as React from 'react';
import './formstyle.css';
import { FormEvent } from 'react';

function FormExampleCSS() {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <form className={'form'} onSubmit={handleSubmit}>
            <input className="form-input" type="text" />
            <input className="form-input" type="text" />
            <button className="form-button">Submit</button>
        </form>
    );
}

export default FormExampleCSS;
