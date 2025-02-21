import React, { useState } from "react";
// import "./styles/App1.css"


function App1() {

    const [headingText, setHeadingText] = useState("Hello");
    // const [color, setColor] = useState("yellow")
    const [isMouseOver, setMouseOver]= useState(false)


    function handleClick() {
        setHeadingText("Submitted");
    }

    function mouseOver() {
        // setColor("white")
        setMouseOver(true)
        
    }
    
    function mouseOut() {
        setMouseOver(false)

    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            {/* <button onClick={ handleClick }>Submit</button> */}
            {/* <button onMouseOut={mouseOut} onClick={ handleClick }>Submit</button> */}
            {/* <button onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ backgroundColor: color }} >Submit</button> */}

            <button
                style={{ backgroundColor: isMouseOver? "yellow" : "white" }}
                onMouseOver={mouseOver} 
                onMouseOut={mouseOut} 
            >Submit</button>


        </div>
    );
}

export default App1;