import React from "react";

class Events extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <>
                {
                    this.props.menuLocationId ?
                        (
                            <div className="events__container">
                                <h2>Event number {this.props.menuLocationId}</h2>
                            </div>
                        )
                    :
                        (
                            <div className="events__container">
                                <h2>Events</h2>
                            </div>
                        )
                }
            </>
        )
    }
}

export default Events;


