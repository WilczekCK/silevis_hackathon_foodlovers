import logo from './logo.svg';
import React from "react";
import CookieController from "./controllers/cookieController";
import LoginToolbarButtons from './components/LoginToolbarButtons'
import PreviousPageButton from './components/previousPageComponent'
import Login from './views/Login';
import Register from './views/Register';
import Homepage from './views/Homepage';
import Events from './views/Events';
import Place from './views/Places';
import Teams from './views/Teams';
import Map from './views/Map'
import './App.css';
import './assets/normalize.css';
import {createBrowserRouter, RouterProvider, redirect} from 'react-router-dom'
import axios from "axios";

axios.defaults.baseURL = 'http://192.168.1.118:5038'

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      cookieInfo: CookieController.getCookieInfo(),
      menuLocation: 'home',
    }

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
        path: '/register',
        element: (
          <>
            <div className="App__map">
              <Map/>
            </div>
            <div className="App__menu">
              <PreviousPageButton />
              <Register />
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
              <PreviousPageButton />
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
        path: '/teams',
        element: <>
            <div className="App__map">
              <Map/>
            </div>
            <div className="App__menu">
              <PreviousPageButton />
              <Teams/>
            </div>
            </>
      },
      {
        path: '/events/',
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
      },
      {
        path: '/place/:placeId',
        element: (
          <>
            <div className="App__map">
              <Map />
            </div>
            <div className="App__menu">
              <PreviousPageButton />
              <Place />
            </div>
          </>
        ),
      }
    ])
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
