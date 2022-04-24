import React, { useState } from "react";

const DisableButton = () => {
        const [inputText, setInputText] = useState('');
        return ( <
            >
            <
            h1 > Disable Button Challenge < /h1> <
            input type = 'text'
            value = { inputText }
            onChange = { ev => setInputText(ev.target.value) }
            /> {
                inputText ? < button > Submit < /button>:""} <
                    />
            )
        }
        export default DisableButton;