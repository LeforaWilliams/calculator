import React from "react";

const Screen = props => {
    return (
        <div className="screen-wrap flex">
            <input type="text" value={props.value} readOnly />
        </div>
    );
};

export default Screen;
