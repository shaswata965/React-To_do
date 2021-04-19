import React from "react";

function Input(props) {
    return (
        <div className="addtask">
            <input
                name="task"
                type="text"
                onChange={props.onChange}
                value={props.text}
                placeholder="Input Task"/>
            <button onClick={props.onClick}>Add</button>
        </div>
    );
}

export default Input;