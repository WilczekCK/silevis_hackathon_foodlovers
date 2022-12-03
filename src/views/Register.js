import React from "react";
import LoginComponent from "../components/loginComponent";
import CookieController from "../controllers/cookieController";
import axios from "axios";


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = { firstName: '', email: '', password: '', lastName: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    
        axios.post('/api/Auth/Register', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }).then((response) => {
            CookieController.setCookie(response.data);
        });
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value});    
    }
    
    render(){
        return (
            <>
                <h1> Rejestracja </h1>
                <form onSubmit={this.handleSubmit}>

                    <label>
                    <span>Imię </span>
                    <input type="text" name="firstName" placeholder="Jan" onChange={this.handleInput} />
                    </label>

                    <label>
                        <span>Nazwisko</span>
                        <input type="text" name="lastName" placeholder="Kowalski" onChange={this.handleInput} />
                    </label>

                    <label>
                    <span>Adres e-mail</span>
                    <input type="email" name="email" placeholder="jankowal@onet.pl" onChange={this.handleInput}/>
                    </label>

                    <label>
                    <span>Hasło</span>
                    <input type="password" name="password" placeholder="***** ***" onChange={this.handleInput}/>
                    </label>

                    <input type="submit" value="Zarejestruj sie" />
                </form>
            </>
        )
    }
}

export default Register;


