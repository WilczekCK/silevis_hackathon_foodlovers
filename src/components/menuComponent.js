import React from "react";
import CookieInstation from "../controllers/cookieController";
import LoginComponent from './loginComponent';

class MenuComponent extends React.Component{
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }    

    logout(){
        CookieInstation.removeCookie();
        this.props.onCookieChange({});
    }

    render(){
        return (
            <div className="navbar__container">

                { this.props.cookieInfo && this.props.cookieInfo.username ? (
                    <div>
                        Hello, {this.props.cookieInfo.username}
                        <br />
                        <button onClick={this.logout}>Logout</button>
                    </div>)
                    :  <LoginComponent onCookieChange={this.props.onCookieChange} />
                }
               
            </div>
        )
    }
}

export default MenuComponent;