// Simple Form with State Management

import React, {useState} from 'react';

const Form = () => {
    const [Name, setName] = useState('')
    const [submittedName, setSubmittedName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(Name);
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input type='text'
                    value={Name}
                    onChange={(e) => setName(e.target.value)}></input>
                </label>
                <button type='submit'>
                        Submit
                </button>
            </form>
            {submittedName && <p>Hello,{submittedName} !</p>}
        </div>
    );
};

export default Form;