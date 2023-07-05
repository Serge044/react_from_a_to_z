import React, {useState} from "react";

const InputText = function() {
    const [value, setValue] = useState("Text inside input");

    return(
        <div>
            <h1>{value}</h1>
                <input
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                ></input>
        </div>
    )
}

export default InputText;