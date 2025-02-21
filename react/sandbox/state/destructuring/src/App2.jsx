import React, { useState } from "react";
// import "./styles/App1.css"


function App2() {

    const [name, setName] = useState("")
    const [headingText, setHeadingText] = useState("")

    function handleChange(event) {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        setName(event.target.value)

    }

    function change(event) {
        setHeadingText(name)
        // event.preventDefault();
        event.preventDefault();
    }



    return (
        <div className="container">
            <h1>Hello {headingText}</h1>
            <form onSubmit={change}>
                <input onChange={handleChange} type="text" placeholder="What's your name?" value={name} />

                <button type="submit">Submit</button>
            </form>


        </div>
    );
}

export default App2;