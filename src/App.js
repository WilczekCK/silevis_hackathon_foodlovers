import logo from './logo.svg';
import React from "react";
import CookieInstation from "./controllers/cookieController";
import MenuComponent from './components/menuComponent'
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      cookieInfo: CookieInstation.getCookieInfo(),
      menuLocation: 'home'
    }

    this.setCookieInfo = this.setCookieInfo.bind(this);
    this.setMenuLocation = this.setMenuLocation.bind(this);
  }

  setCookieInfo( cookieInfo ){
    return this.setState({ cookieInfo });
  }

  setMenuLocation( menuLocation ){
    return this.setState({ menuLocation });
  }

  render(){
    return (
      <div className="App">
          <div className="App__map"></div>
          <div className="App__menu">
            <MenuComponent 
              cookieInfo={this.state.cookieInfo}
              onCookieChange={this.setCookieInfo}
              onMenuChange={this.setMenuLocation}
            />
          </div>
      </div>
    )
  }
}


export default App;
