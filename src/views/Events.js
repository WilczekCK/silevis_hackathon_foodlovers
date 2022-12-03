import React from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import CookieInstation from "../controllers/cookieController";


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class Events extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }


componentDidMount() {
    const cookie = CookieInstation.getCookieInfo();

    axios.get(`/api/Event/Upcoming`, { headers:{ Authorization: `Bearer ${cookie}` } }).then((response) => {
        this.setState({events: response.data})
    });
}



    render(){
        return (
            <>
                { 
                    <ul className="events__container__single">
                        {this.state.events.map(item => (
                            <li key={item.id}> 
                                <h4>{item.name}</h4>
                                <span>{new Date(item.date).toLocaleString()}</span>
                                <span>{item.location.address}</span>
                            </li>
                        ))}
                    </ul>
                }
            </>
        )
    }
}

export default withRouter(Events);


