import React from "react";

class LoginComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            isValid: undefined,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
        this.createLoginResponse = this.createLoginResponse.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        const isCorrect = this.state.username === 'test' && this.state.password === 'test';

        this.setState({ isValid: isCorrect });
    }

    handleInputs(e){
        this.setState({[e.target.name]: e.target.value});
    }

    createLoginResponse(){
        if ( this.state.isValid === undefined ){
            return '';
        } else if( this.state.isValid ) {
            return 'Logged in';
        } else {
            return 'Wrong credentials';
        }
    }

    render(){
        return (
            <div class="login__container">
                <h2 class="login__container__response">
                    {this.createLoginResponse()}
                </h2>

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