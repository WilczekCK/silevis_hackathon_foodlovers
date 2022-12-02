import React from "react";
import CookieInstation from "../controllers/cookieController";

class MenuComponent extends React.Component{
    constructor(){
        super();

        console.log(CookieInstation.getCookieInfo());
    }    

    render(){
        return (
            <div className="navbar__container">
            </div>
        )
    }
}

export default MenuComponent;