import React from "react";
import Card from "./Card"
import contacts from "../contacts";



function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}



function App() {
  // console.log(contacts)
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {
        // contacts.map((contact, index) => (
        //   <Card
        //     key={index} // ideally use a unique id if available
        //     name={contact.name}
        //     img={contact.imgURL}
        //     contact={contact.phone} // Make sure property names match your data
        //     email={contact.email}

        //   />

        // ))


        contacts.map(createCard)
      }
    </div>


  )
}

export default App;
