import React from "react";
import LoginComponent from "../components/loginComponent";

class Login extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <>
                <LoginComponent onCookieChange={this.props.onCookieChange} />
            </>
        )
    }
}

export default Login;


