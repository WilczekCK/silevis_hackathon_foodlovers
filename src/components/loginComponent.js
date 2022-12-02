import React from "react";

class LoginComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    handleInputs(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div id="login__container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputs} />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputs}/>

                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LoginComponent;