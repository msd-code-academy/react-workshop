import React from "react";

import "./Character.scss";

export default function Character(props) {

    const {id, name, imageUrl} = props.data

    return (
        <div className="character">
            <div className="header">{id} {name}</div>
            <div className="image"><img src={imageUrl}/></div>

        </div>
    );
}
