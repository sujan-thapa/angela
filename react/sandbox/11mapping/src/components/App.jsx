import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia"

function emoji(emo) {
  return (
    <Entry
      key={emo.id}
      emoji={emo.emoji}
      name={emo.name}
      meaning={emo.meaning}
    />
  )
}

function App() {

  console.log(emojipedia[0]);
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {/* mapping functions */}
      <dl className="dictionary">
        {emojipedia.map(emoji)}
      </dl>

    </div>
  );
}

export default App;
