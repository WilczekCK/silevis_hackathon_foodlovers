import logo from './logo.svg';
import React from "react";
import CookieInstation from "./controllers/cookieController";
import LoginToolbarButtons from './components/LoginToolbarButtons'
import PreviousPageButton from './components/previousPageComponent'
import Login from './views/Login';
import Homepage from './views/Homepage';
import Events from './views/Events';
import Map from './views/Map'
import './App.css';
import './assets/normalize.css';
import {createBrowserRouter, RouterProvider, redirect} from 'react-router-dom'


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      cookieInfo: CookieInstation.getCookieInfo(),
      menuLocation: 'home',
    }

    this.setCookieInfo = this.setCookieInfo.bind(this);

    this.router = createBrowserRouter([
      {
        path: '/',
        element: (
          <>
            <div className="App__map">
              <Map/>
            </div>
            <div className="App__menu">
              <Homepage />
              <LoginToolbarButtons />
            </div>
          </>
        )
      },  
      {
        path: '/login',
        element:  (
          <>
            <div className="App__map">
              <Map/>
            </div>
            <div className="App__menu">
              <Login onCookieChange={this.setCookieInfo}/>
            </div>
          </>
        )
        
        
      },
      {
        path: '/map',
        element: <Map/>
      },
      {
        path: '/event/:eventId',
        element: (
          <>
            <div className="App__map">
              <Map />
            </div>
            <div className="App__menu">
              <PreviousPageButton />
              <Events />
            </div>
          </>
        ),
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
    console.log(this.router.redirect);
  
  }

  render(){
    return (
      <div className="App">
          <RouterProvider router={this.router} />  
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
