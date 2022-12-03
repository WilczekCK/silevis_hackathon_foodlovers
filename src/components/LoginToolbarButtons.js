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
        this.setState({
            cookieInfo: undefined
        })
        this.forceUpdate();
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
                        <button>
                            <Link to="login">Zaloguj sie</Link>
                        </button>
                        <button>Zarejestruj sie</button>
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