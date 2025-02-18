import React from "react";
import Header from "./Header";
import Footer from "./Footer"
// import notes from "./Note";

import notes from "../note";
import Note from "./Note";

function note(notee) {
    return (
        <Note
            key={notee.key}
            title={notee.title}
            content={notee.content}
        />
    )
}

function App() {
    return (
        <div>
            <Header />
            {/* <Note /> */}

            {notes.map(note)}

            <Footer />

        </div>
    )
}

export default App;