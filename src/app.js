import React from "react";
import Button from "./button.js";
import Screen from "./screen.js";
import Keyboard from "./keyboard.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            calculation: 0,
            solution: "",
            input: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.regexCalc = this.regexCalc.bind(this);
    }

    regexCalc(inputString) {
        var total = 0,
            inputString = inputString.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
        while (inputString.length) {
            total += parseFloat(inputString.shift());
        }
        return total;
    }

    //click function that determines the behaviour based on what key was clicked
    handleClick(event) {
        let e = event.target.value;
        let operatorSign = "";

        let { input } = this.state;
        // when eqal sign is clicked >>
        if (e == "=") {
            let sol = this.regexCalc(input);
            console.log("the result", sol);
            this.setState({ input: sol });
        }

        //when AC is clicked >>
        else if (e == "AC") {
            this.setState({ input: "0" });
        } else if (e == "+" || e == "-") {
            operatorSign = e;
            this.setState({ input: ` ${(input += e)} ` });
        } else if (e == ".") {
            this.setState({ input: (input += e) });
        }
        // when a number is clicked on the keyboard
        else {
            this.setState({
                input: (input += e)
            });
            //calculations
        }
    }

    render() {
        return (
            <div className="app-wrap flex column">
                <Screen value={this.state.input} />
                <Keyboard handleClick={this.handleClick} />
            </div>
        );
    }
}

export default App;
