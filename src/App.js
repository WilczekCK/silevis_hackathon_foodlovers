import logo from './logo.svg';
import React from "react";
import MenuComponent from './components/menuComponent';
import CookieInstation from "./controllers/cookieController";
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      cookieInfo: CookieInstation.getCookieInfo()
    }

    this.setCookieInfo = this.setCookieInfo.bind(this);
  }

  setCookieInfo( cookieInfo ){
    return this.setState({ cookieInfo });
  }

  render(){
    return (
      <div className="App">
          <div className="App__map"></div>
          <div className="App__menu"></div>
      </div>
    )
  }
}


export default App;
