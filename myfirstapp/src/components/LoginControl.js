import React, { Component } from "react";
import Salutacio from "./Salutacio";

class LoginControl extends Component {
    // Let's build the contructor with the super and binded functions will we use:
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    // Let's define the state depending on each function:
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render(){
        // Let's define a variable to store the login state:
        const isLoggedIn = this.state.isLoggedIn;

        let button;
        // Let's define the conditional render (needs to be before the return):
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return(
            <span>
                <Saluda isLoggedIn={isLoggedIn} nick={this.props.nick}/>
                {button}
            </span>
        )
    }
}

// Let's create the Saluda functional component:
function Saluda(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        const name = props.nick;
        return <Salutacio nick={name} />;
    }
    return <SalutacioConvidat />;
}

// Let's create the SalutacionConvitat for when the user is not logged in:
function SalutacioConvidat() {
    return (<span>Please log in.</span>)
}

// Now we create the components for login and logout. Note the props.onClick, that comes from the render
function LoginButton(props) {
    return(
        <button onClick={props.onClick} className="btn btn-success">Login</button>
    )
}
function LogoutButton(props) {
    return(
        <button onClick={props.onClick} className="btn btn-danger">Logout</button>
    )
}

export default LoginControl;