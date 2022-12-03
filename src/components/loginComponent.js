import axios from "axios";
import React from "react";
import jwt from 'jwt-decode'
import CookieController from "../controllers/cookieController";
import Cookies from 'js-cookie';


class LoginComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            isValid: undefined,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
        this.createLoginResponse = this.createLoginResponse.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // State managment, if logged or not
        axios.post('/api/Auth/Login', {
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            this.setState({ isValid: true });
            // const translation = response.data;


            CookieController.setCookie(response.data);
        }).catch(() => {
            this.setState({ isValid: false });
        });


    }

    handleInputs(e){
        this.setState({[e.target.name]: e.target.value});
    }

    createLoginResponse(){
        if ( this.state.isValid === undefined ){
            return '';
        } else if( this.state.isValid ) {
            return 'Zalogowałeś się!';
        } else {
            return 'Brak takiego konta bądź złe dane logowania';
        }
    }

    render(){
        return (
            <div className="login__container">
                <h2 className="login__container__response">
                    { this.createLoginResponse() }
                </h2>

                {
                    !this.state.isValid || this.state.isValid === undefined 
                    ? (
                        <form onSubmit={this.handleSubmit}>
                        <label>
                            E-Mail:
                            <input type="text" name="email" value={this.state.email} onChange={this.handleInputs} />
                        </label>
                        <br/>
                        <label>
                            Hasło:
                            <input type="password" name="password" value={this.state.password} onChange={this.handleInputs}/>
                        </label>
                        <br/>
                        <input type="submit" value="Login"/>
                    </form>
                    )
                    : 'Cofnij się by kontynuować'
                }


            </div>
        )
    }
}

export default LoginComponent;