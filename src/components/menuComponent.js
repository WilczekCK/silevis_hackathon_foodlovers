import React from "react";
import CookieInstation from "../controllers/cookieController";
import LoginComponent from './loginComponent';

class MenuComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            menuSelected: 'home'
        }

        this.logout = this.logout.bind(this);
        this.displayProperMenuContent = this.displayProperMenuContent.bind(this);
        this.handleMenuChange = this.handleMenuChange.bind(this);
    }    

    logout(){
        CookieInstation.removeCookie();
        this.props.onCookieChange({});
    }

    handleMenuChange(e){
        this.setState({
            menuSelected: e.target.attributes['data-place'].value
        })
    }

    displayProperMenuContent(){
        switch (this.state.menuSelected) {
            case 'home':
                return (
                <div className="homepage__container">
                    <h2>Homepage</h2>
                </div>
                )
            case 'locations':
                return (
                <div className="locations__container">
                    <h2>Locations</h2>
                </div>
                )
            case 'teams':
                return (
                <div className="teams__container">
                    <h2>Teams</h2>
                </div>
                )
            case 'events':
                return (
                <div className="events__container">
                    <h2>Events</h2>
                </div>
                )
            default:
                break;
        }
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
               
               <ul>
                    <li><a onClick={this.handleMenuChange} data-place="home" href="#">HOME</a></li>
                    <li><a onClick={this.handleMenuChange} data-place="locations" href="#">MIEJSCA</a></li>
                    <li><a onClick={this.handleMenuChange} data-place="teams" href="#">DRUZYNY</a></li>
                    <li><a onClick={this.handleMenuChange} data-place="events" href="#">WYDARZENIE</a></li>
                </ul>

                {this.displayProperMenuContent()}
            </div>
        )
    }
}

export default MenuComponent;