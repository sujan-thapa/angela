import React, { useState } from "react";
function Items(props) {

    // const [isDone, setIsDone] = useState(false);

    // function updateList(event) {
    //     // setClick(true);

    //     setIsDone(prevValue=>{
    //         return !prevValue
    //     })
    // }





    return (
        // <div onClick={props.deleteItem} style={{ textDecoration: isDone ? "line-through" : "none" }}>
        //     <li>{props.text}</li>
        // </div>
        // <div onClick={props.onChecked}>
        //     <li>{props.text}</li>
        // </div>

        <div onClick={()=>{
            props.onChecked(props.id)
        }}>
            <li>{props.text}</li>
        </div>


    )
}

export default Items;