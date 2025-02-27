import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import initialNotes from "../note.js"

function App() {
    const [notes, setNotes] = useState(initialNotes);

    // console.log(notes)
    // let lastKey = notes[notes.length-1].key;

     // Get the last key from the notes array
     const lastKey = notes.length > 0 ? notes[notes.length - 1].key : 0;

    // console.log(lastKey)
    // notes.map((note)=>{
    //     console.log(note.key)
    // })
    // let a = {
    //     key: "5",
    //     title: "sujan",
    //     content: "thapa"
    // }
    // console.log(notes.push(a))

    function note(item){
        return (
            <Note
            key={item.key}
            id={item.key} // Pass the key as an id prop
            title={item.title}
            content={item.content}
            // deleteItem = {deleteNote(item.key)}
            deleteItem = {deleteNote}
        />
        )
    }

    function addNote(newNote){
        const updatedNote = {key: lastKey + 1, ...newNote}
        // notes.push(updatedNote)
        setNotes((prevNotes) => [...prevNotes, updatedNote]); // Update the state

    }

   

    // function deleteNote(id) {
    //     setNotes(prevItems => {
    //       return prevItems.filter((item, index) => {
    //         return index !== id;
    //       });
    //     });
    //   }

    function deleteNote(key) {
        setNotes(prevItems => {
            return prevItems.filter(item => item.key !== key); // Remove object by key
        });
    }

    return (
        <div>
            <Header />
            <CreateArea add={addNote} />
            {notes.map(note)}
            <Footer />
        </div>
    );
}

export default App;
