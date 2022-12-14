import React from "react";
import LoginComponent from "../components/loginComponent";
import CookieController from "../controllers/cookieController";
import axios from "axios";
import namesurname_icon from '../assets/icons/icon_nameandsurname_black.png';
import password_icon from '../assets/icons/icon_password_black.png';
import email_icon from '../assets/icons/icon_mail_black.png';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = { firstName: '', email: '', password: '', lastName: '', isRegistered: false }
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
            this.setState({isRegistered:true});
        });
    }

    handleInput(e){
        this.setState({[e.target.name]: e.target.value});    
    }
    
    render(){
        return (
            <div className="register__container">
                <h1> Rejestracja </h1>
                {!this.state.isRegistered ?
                <form onSubmit={this.handleSubmit}>

                    <label>
                    <span>Imię </span>
                    <img src={namesurname_icon} />
                    <input type="text" name="firstName" placeholder="Jan" onChange={this.handleInput} />
                    </label>

                    <label>
                        <span>Nazwisko</span>
                        <img src={namesurname_icon} />
                        <input type="text" name="lastName" placeholder="Kowalski" onChange={this.handleInput} />
                    </label>

                    <label>
                        <span>Adres e-mail</span>
                        <img src={email_icon} />
                        <input type="email" name="email" placeholder="jankowal@onet.pl" onChange={this.handleInput}/>
                    </label>

                    <label>
                        <span>Hasło</span>
                        <img src={password_icon} />
                        <input type="password" name="password" placeholder="***** ***" onChange={this.handleInput}/>
                    </label>

                    <input type="submit" value="Zarejestruj sie" />
                </form>
                : <p>Udało się zarejestrować, cofnij się by kontynuować</p>}
            </div>
        )
    }
}

export default Register;


