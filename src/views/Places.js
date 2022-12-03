import React from "react";
import {useParams, Router} from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class Place extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eventId: props.match.params.eventId,
        }
    }


    render(){
        return (
            <>
                {
                    this.state.eventId ?
                        (
                            <div className="events__container">
                                <h2>Place number {this.state.eventId}</h2>
                            </div>
                        )
                    :
                        (
                            <div className="events__container">
                                <h2>Places</h2>
                            </div>
                        )
                }
            </>
        )
    }
}

export default withRouter(Place);


