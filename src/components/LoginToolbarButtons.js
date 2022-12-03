import React from "react";
import CookieInstation from "../controllers/cookieController";
import { Outlet, Link } from "react-router-dom";

class LoginToolbarButtons extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cookieInfo: CookieInstation.getCookieInfo()
        }

        this.logout = this.logout.bind(this);
        this.changeMenuLocation = this.changeMenuLocation.bind(this);
    }

    logout(){
        CookieInstation.removeCookie()
        this.setState({ cookieInfo: undefined })
    }

    changeMenuLocation(e){
        const menuLocation = e.target.attributes['data-action'].value;
        return this.props.onMenuChange(menuLocation);
    }

    render(){
        return (
            <>
            {this.state.cookieInfo === undefined
                ? (
                    <div className="login_toolbar">
                        <Link to="login">
                            <button>Zaloguj sie</button>
                        </Link>
                        <Link to="register">
                            <button>Zarejestruj sie</button>
                        </Link>
                    </div>
                ) : (
                    <div className="login_toolbar">
                        <button onClick={this.logout}>
                            Wyloguj się
                        </button>
                    </div> 
                )
            }
            </>
        )
    }
}

export default LoginToolbarButtons;