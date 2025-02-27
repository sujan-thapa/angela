import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;  // Destructure name and value from event.target
        // console.log(value)
        setNote((prevNote) => ({
            ...prevNote,  // Spread the previous state
            [name]: value,  // Update the property that matches the name
        }));
    }

    function handleClick(event){
        event.preventDefault();
        props.add(note);
        setNote({ title: "", content: "" }); // Clear the input fields

    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
                <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
