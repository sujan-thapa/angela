import React from "react";

function Detail(props) {
    return (
        // first way
        // <div className="bottom">
        //     <p className="info">{props.contact}</p>
        //     <p className="info">{props.email}</p>
        // </div>


        // second option
        <p className="info">{props.detailInfo}</p>
    )
}

export default Detail;