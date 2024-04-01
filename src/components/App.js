// App.js
import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            secondName: "",
            relationshipStatus: ""
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleCalculateRelationship = () => {
        const { firstName, secondName } = this.state;
        if (!firstName || !secondName) {
            this.setState({ relationshipStatus: "Please Enter valid input" });
            return;
        }

        const trimmedFirstName = firstName.replace(new RegExp(`[${secondName}]`, 'g'), '');
        const trimmedSecondName = secondName.replace(new RegExp(`[${firstName}]`, 'g'), '');

        const remainingLength = (trimmedFirstName.length + trimmedSecondName.length) % 6;

        switch (remainingLength) {
            case 1:
                this.setState({ relationshipStatus: "Friends" });
                break;
            case 2:
                this.setState({ relationshipStatus: "Love" });
                break;
            case 3:
                this.setState({ relationshipStatus: "Affection" });
                break;
            case 4:
                this.setState({ relationshipStatus: "Marriage" });
                break;
            case 5:
                this.setState({ relationshipStatus: "Enemy" });
                break;
            case 0:
                this.setState({ relationshipStatus: "Siblings" });
                break;
            default:
                this.setState({ relationshipStatus: "" });
        }
    };

    handleClear = () => {
        this.setState({
            firstName: "",
            secondName: "",
            relationshipStatus: ""
        });
    };

    render() {
        const { firstName, secondName, relationshipStatus } = this.state;

        return (
            <div id="main">
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleInputChange}
                    data-testid="input1"
                />
                <input
                    type="text"
                    placeholder="Second Name"
                    name="secondName"
                    value={secondName}
                    onChange={this.handleInputChange}
                    data-testid="input2"
                />
                <button onClick={this.handleCalculateRelationship} data-testid="calculate_relationship">
                    Calculate Relationship Future
                </button>
                <button onClick={this.handleClear} data-testid="clear">
                    Clear
                </button>
                <h3 data-testid="answer">{relationshipStatus}</h3>
            </div>
        );
    }
}

export default App;
