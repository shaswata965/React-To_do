import React from "react";

function List(props) {



    return (
                <li style = {{fontWeight:"300"}} onClick={() => {
                    return(props.onChecked(props.id));
                }}>{props.text}</li>
    );
}

export default List;


// const [click , setClick] = useState(false);  

// function handleClick(){
//     setClick(prevvalue => {return(!prevvalue);})
// }