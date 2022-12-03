import React from "react";
import CookieInstation from "../controllers/cookieController";

class LoginToolbarButtons extends React.Component{
    constructor(props){
        super(props);
    }

    logout(){
        this.props.onLogout();
    }

    render(){
        return (
            <>
            {!this.props.isLoggedIn 
                ? (
                    <div class="homepage__container_bottomAlign--horizontal">
                        <button>Zaloguj sie</button>
                        <button>Zarejestruj sie</button>
                    </div>
                ) : (
                    <div class="homepage__container_bottomAlign--horizontal">
                        <button onClick={this.logout}>Wyloguj się</button>
                    </div> 
                )
            }
            </>
        )
    }
}

export default LoginToolbarButtons;