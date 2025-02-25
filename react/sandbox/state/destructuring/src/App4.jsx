// for complex state practice
import React, { useState } from "react";
// import "./styles/App1.css"


function App4() {

    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    function updateName(event) {
        // setName(event.target.value)
        const { value, name } = event.target
        // console.log(value)
        // console.log(name)

        // setFullName(prevValue => ({
        //     ...prevValue, // Keep previous values
        //     [name]: value // Update only the changed field
        // }));

        setFullName(prevValue => {
            if (name === "fname") {
                return {
                    firstName: value,
                    lastName: prevValue.lastName
                }

            } else if (name === "lname") {
                return {
                    firstName: prevValue.firstName,
                    lastName: value
                }
            }else if (name === 'email'){
                return {
                    firstName: prevValue.email,
                    email: value
                }
            }
        })


        // setFullName(prevValue => {
        //     console.log("Previous State:", prevValue); // Logs old state
        //     console.log("Updating:", name, "to", value); // Logs the change
        //     const newState = { ...prevValue, [name]: value };
        //     console.log("New State:", newState); // Logs updated state
        //     return newState;
        // });


        // setFullName(prevValue => {
        //     console.log("Previous State:", prevValue); // Logs old state
        //     console.log("Updating:", name, "to", value); // Logs the change

        //     const newState = { 
        //         ...prevValue, 
        //         [name]: value 
        //     };

        //     console.log("New State:", newState); // Logs updated state
        //     return newState;
        // });

    }

    return (
        <div className="container">
            <h1>Hello {fullName.firstName} {fullName.lastName}</h1>
            <p>{fullName.email}</p>
            <form>
                <input
                    name="fname"
                    onChange={updateName}
                    type="text"
                    placeholder="First Name"
                    value={fullName.firstName}
                />
                <input
                    name="lname"
                    onChange={updateName}
                    type="text"
                    placeholder="Last Name"
                    value={fullName.lastName}
                />


                <input
                    name="email"
                    onChange={updateName}
                    type="email"
                    placeholder="Email Address"
                    value={fullName.email}
                />

                <button type="submit">Submit</button>
            </form>


        </div>
    );
}

export default App4;