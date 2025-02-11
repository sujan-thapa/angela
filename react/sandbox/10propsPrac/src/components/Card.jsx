import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <Avatar img={props.img} />

                </div>

                {/* <div className="bottom">
                    <p className="info">{props.contact}</p>
                    <p className="info">{props.email}</p>
                </div> */}

                {/* we can do this */}
                {/* <Detail contact={props.contact} email={props.email} /> */}

                {/* other way of doing */}
                <div className="bottom">
                    {/* <p className="info">{props.contact}</p>
                    <p className="info">{props.email}</p> */}
                    <Detail detailInfo = {props.contact} />
                    <Detail detailInfo = {props.email} />
                </div>
            </div>
        </div>
    )

}

export default Card;