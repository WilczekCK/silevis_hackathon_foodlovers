import React from "react";
import CookieInstation from "../controllers/cookieController";

class LoginComponent extends React.Component{
    constructor(props){
        super(props);

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
        const correctLogin = 'test';
        const correctPassword = 'test';

        // State managment, if logged or not
        const isCorrect = this.state.username === correctLogin && this.state.password === correctPassword;
        this.setState({ isValid: isCorrect });

        // Cookie creation
        if (isCorrect) {
            CookieInstation.setCookie();
            
            queueMicrotask(() => this.props.onCookieChange( CookieInstation.getCookieInfo() ));
        }
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
            <div className="login__container">
                <h2 className="login__container__response">
                    { this.createLoginResponse() }
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Login:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleInputs} />
                    </label>
                    <br/>
                    <label>
                        Hasło:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInputs}/>
                    </label>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default LoginComponent;