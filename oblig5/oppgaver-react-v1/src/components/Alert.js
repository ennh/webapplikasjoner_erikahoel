import React, { useState } from 'react';

function Alert ({input, clicked}) {
    const [text, setText] = useState('');
    
    function getText(e) {
        setText(e.target.value);
        input(e.target.value);
    };

    function isClicked() {
        if (!text) {
            alert("You must type something!")
        };

        clicked(true)
        alert(text)
    };

    return (
        <div>
            <input onChange={getText} type="text" placeholder="Text here"/>
            <button onClick={isClicked}>Submit</button>
        </div>
    );
};

export default Alert;