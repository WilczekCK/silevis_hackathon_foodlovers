import React from "react";

class LoginComponent extends React.Component{
    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <div id="login__container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" />
                    <input type="password" name="password" />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginComponent;