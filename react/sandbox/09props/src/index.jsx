import React from "react";
import { createRoot } from "react-dom/client";

function Card(props) {
  return (
    // <div>
    //   <h1>My Contacts</h1>

    //   <h2>Beyonce</h2>
    //   <img
    //     src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    //     alt="avatar_img"
    //   />
    //   <p>+123 456 789</p>
    //   <p>b@beyonce.com</p>
    // </div>
    <div>
      <h1>My Contacts</h1>

      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" width="200" height="auto" />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}

// ReactDOM.render(

//     <h2>Jack Bauer</h2>
//     <img
//       src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//       alt="avatar_img"
//     />
//     <p>+987 654 321</p>
//     <p>jack@nowhere.com</p>

//     <h2>Chuck Norris</h2>
//     <img
//       src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
//       alt="avatar_img"
//     />
//     <p>+918 372 574</p>
//     <p>gmail@chucknorris.com</p>
//   </div>,
//   document.getElementById("root")
// );

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      contact="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="David Beckham"
      img="https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2155232571-e1737979675581.jpg?w=1440&q=75"
      contact="+123 456 789"
      email="b@beckham.com"
    />
  </div>
);
