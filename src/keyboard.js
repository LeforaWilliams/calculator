import React from "react";
import Button from "./button.js";

const Keyboard = props => {
    return (
        <div className="keyboard flex">
            <div className="key-row">
                <Button handleClick={props.handleClick} name={"7"}>
                    7
                </Button>

                <Button handleClick={props.handleClick} name={"4"}>
                    4
                </Button>

                <Button handleClick={props.handleClick} name={"1"}>
                    1
                </Button>

                <Button handleClick={props.handleClick} name={"AC"}>
                    AC
                </Button>
            </div>

            <div className="key-row">
                <Button handleClick={props.handleClick} name={"8"}>
                    8
                </Button>

                <Button handleClick={props.handleClick} name={"5"}>
                    5
                </Button>

                <Button handleClick={props.handleClick} name={"2"}>
                    2
                </Button>

                <Button handleClick={props.handleClick} name={"0"}>
                    0
                </Button>
            </div>

            <div className="key-row">
                <Button handleClick={props.handleClick} name={"9"}>
                    9
                </Button>

                <Button handleClick={props.handleClick} name={"6"}>
                    6
                </Button>

                <Button handleClick={props.handleClick} name={"3"}>
                    3
                </Button>

                <Button handleClick={props.handleClick} name={"."}>
                    .
                </Button>
            </div>

            <div className="key-row">
                <Button handleClick={props.handleClick} name={"+"}>
                    +
                </Button>

                <Button handleClick={props.handleClick} name={"-"}>
                    -
                </Button>

                <Button
                    handleClick={props.handleClick}
                    className={"equal"}
                    name={"="}
                >
                    =
                </Button>
            </div>
        </div>
    );
};

export default Keyboard;
