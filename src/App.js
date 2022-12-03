import logo from './logo.svg';
import React from "react";
import CookieInstation from "./controllers/cookieController";
import LoginToolbarButtons from './components/LoginToolbarButtons'
import Login from './views/Login';
import Homepage from './views/Homepage';
import Map from './views/Map'
import './App.css';
import './assets/normalize.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      cookieInfo: CookieInstation.getCookieInfo(),
      menuLocation: 'home'
    }

    this.setCookieInfo = this.setCookieInfo.bind(this);
    this.setMenuLocation = this.setMenuLocation.bind(this);

    this.router = createBrowserRouter([
      {
        path: '/',
        element: (
          <>
          <Homepage />
          <LoginToolbarButtons 
              isLoggedIn={(this.state.cookieInfo)}
              onLogout={this.setCookieInfo}
            />
          </>
        )
        },  {
        path: '/login',
        element: <Login onCookieChange={this.setCookieInfo}/>
      }
    ])
  }

  setCookieInfo( cookieInfo ){
    if(!cookieInfo.username){
      CookieInstation.removeCookie();
    }
    
    this.setState({ cookieInfo });
  }

  setMenuLocation( menuLocation ){

  }

  render(){
    return (
      <div className="App">
          <div className="App__map">
            <Map
              onMenuChange={this.setMenuLocation}
            />
          </div>
          <div className="App__menu">

            <RouterProvider router={this.router} />
          </div>
      </div>  
      )
  }
}

/*

      <div className="App">
          <div className="App__map">
            <Map
              onMenuChange={this.setMenuLocation}
            />
          </div>
          <div className="App__menu">
            
            
            
          </div>
      </div>

<MenuComponent 
              cookieInfo={this.state.cookieInfo}
              onCookieChange={this.setCookieInfo}
              menuLocation={this.state.menuLocation}
              onMenuChange={this.setMenuLocation}
            />
             */

export default App;
