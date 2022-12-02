import React from "react";

class Homepage extends React.Component{
    constructor(){
        super();
    }


    render(){
        return (
            <div className="homepage__container">
                <div className="homepage__container--map"></div>
                <div className="homepage__container--menu"></div>
            </div>
        )
    }
}

export default Homepage;