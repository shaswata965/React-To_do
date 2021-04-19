import React, {useState} from "react";
import Footer from "./Components/Footer.jsx";

function App() {
    const [task,
        setTask] = useState("");
    const [lists,
        setLists] = useState([]);
    const listItems = lists.map((list) => <li key={list}>{list}</li>);
    function handleChange(event) {
        const {value} = event.target;
        setTask(value);
    }
    function handleClick() {
        setLists((prevValue) => {
            return ([
                ...prevValue,task 
            ]);
        });
    }
    console.log(lists);
    return (
        <div>
        <div className="flexbox">
            <h1 className="heading">
                To-Do List
            </h1>
            <div className="addtask">
                <input
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                    placeholder="Input Task"/>
                <button onClick={handleClick}>Add</button>
            </div>
            <div className="list">
                <ul>
                    {listItems}
                </ul>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default App;