import React from "react";
import CookieInstation from "../controllers/cookieController";
import LoginComponent from './loginComponent';

import Events from '../views/Events'
import Homepage from '../views/Homepage'
import Login from '../views/Login'

class MenuComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            earlierMenuLocation: false
        }

        this.logout = this.logout.bind(this);
        this.displayProperMenuContent = this.displayProperMenuContent.bind(this);
        this.handleMenuChange = this.handleMenuChange.bind(this);
        this.goToPreviousPage = this.goToPreviousPage.bind(this);
    }    

    logout(){
        CookieInstation.removeCookie();
        this.props.onCookieChange({});
    }

    handleMenuChange(e){
        const menuLocation = e.target.attributes['data-place'].value;
        
        this.props.onMenuChange(menuLocation); // Ref to main comp.
        this.setState((state, props) => ({
            earlierMenuLocation: this.props.menuLocation
        }))
    }

    goToPreviousPage(){
        this.props.onMenuChange(this.state.earlierMenuLocation); // Ref to main comp.
        this.setState({menuLocation: this.state.earlierMenuLocation, earlierMenuLocation: false})
    }

    displayProperMenuContent(){
        const menuLocation = this.props.menuLocation;

        switch (true) {
            case menuLocation.includes('home'):
                return (
                <div className="homepage__container">
                    <Homepage isLoggedIn={(this.props.cookieInfo && this.props.cookieInfo.username) !== ''}/>
                </div>
                )
            case menuLocation.includes('locations'):
                return (
                <div className="locations__container">
                    <h2>Locations</h2>
                </div>
                )
            case menuLocation.includes('teams'):
                return (
                <div className="teams__container">
                    <h2>Teams</h2>
                </div>
                )
            case menuLocation.includes('events'):
                return <Events menuLocationId={menuLocation.replace(/\D/g, "")} />
            case menuLocation.includes('login'):
                return <Login />
            default:
                break;
        }
    }


    render(){
        return (
            <>
                <div className="navbar__container">
                    
                    <button disabled={!this.state.earlierMenuLocation} onClick={this.goToPreviousPage} href="#"> BACK </button>
                    
                    { this.props.cookieInfo && this.props.cookieInfo.username ? (
                        <div>
                            Hello, {this.props.cookieInfo.username}
                            <br />
                            <button onClick={this.logout}>Logout</button>
                        </div>)
                        :  <LoginComponent onCookieChange={this.props.onCookieChange} />
                    }
                
                    <ul>
                        <li><a onClick={this.handleMenuChange} data-place="home" href="#">HOME</a></li>
                        <li><a onClick={this.handleMenuChange} data-place="locations" href="#">MIEJSCA</a></li>
                        <li><a onClick={this.handleMenuChange} data-place="teams" href="#">DRUZYNY</a></li>
                        <li><a onClick={this.handleMenuChange} data-place="events" href="#">WYDARZENIA</a></li>
                    </ul>

                
                </div>
            
                {this.displayProperMenuContent()}
            </>
        )
    }
}

export default MenuComponent;