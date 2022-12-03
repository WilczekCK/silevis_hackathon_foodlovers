import React from "react";

class LoginToolbarButtons extends React.Component{
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
        this.changeMenuLocation = this.changeMenuLocation.bind(this);
    }

    logout(){
        this.props.onLogout();
    }

    changeMenuLocation(e){
        const menuLocation = e.target.attributes['data-action'].value;
        console.log(menuLocation)
        return this.props.onMenuChange(menuLocation);
    }

    render(){
        return (
            <>
            {!this.props.isLoggedIn 
                ? (
                    <div className="login_toolbar">
                        <button onClick={this.changeMenuLocation} data-action="login">Zaloguj sie</button>
                        <button onClick={this.changeMenuLocation} data-action="signup">Zarejestruj sie</button>
                    </div>
                ) : (
                    <div className="login_toolbar">
                        <button onClick={this.logout}>Wyloguj się</button>
                    </div> 
                )
            }
            </>
        )
    }
}

export default LoginToolbarButtons;