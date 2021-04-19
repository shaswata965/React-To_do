import React, {useState} from "react";
import Footer from "./Components/Footer.jsx";
import List from "./Components/List.jsx";
import Input from "./Components/Input.jsx";

function App() {
    const [task,
        setTask] = useState("");
    const [lists,
        setLists] = useState([]);
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

    function deleteItem(id){
        setLists((prevValue)=>{
            return(prevValue.filter((item,index) =>{
                return index !=id;
            }))
        })
    }


    console.log(lists);
    return (
        <div>
        <div className="flexbox">
            <h1 className="heading">
                To-Do List
            </h1>
            <Input text={task} onChange={handleChange} onClick={handleClick} />

            <div className="list">
            <ul>
  {lists.map((items,index) => <List key= {index} id= {index} text={items} onChecked={deleteItem} /> )}
        </ul>
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default App;

