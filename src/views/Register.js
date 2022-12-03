import React from "react";
import LoginComponent from "../components/loginComponent";

class Register extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <>
                <h1> Rejestracja </h1>
                <form onSubmit={this.handleSubmit}>

                    <label>
                    <span>Imię i nazwisko</span>
                    <input type="text" name="name" placeholder="Jan Kowalski" />
                    </label>

                    <label>
                    <span>Adres e-mail</span>
                    <input type="email" name="email" placeholder="jankowal@onet.pl"/>
                    </label>

                    <label>
                    <span>Hasło</span>
                    <input type="password" name="password" placeholder="***** ***"/>
                    </label>

                    <input type="submit" value="Zarejestruj sie" />
                </form>
            </>
        )
    }
}

export default Register;


