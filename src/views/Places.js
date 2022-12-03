import React from "react";
import CookieInstation from "../controllers/cookieController";
import axios from "axios";
import {useParams, Router} from 'react-router-dom';
import jwt from 'jwt-decode'

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
            placeId: props.match.params.placeId,
            name: '',
            date: '',
            time: '',
            events: [],
            cookie: CookieInstation.getCookieInfo(),
        }

        this.createNewEvent = this.createNewEvent.bind(this);
        this.handleInputs = this.handleInputs.bind(this);
    }


    createNewEvent(e){
        e.preventDefault();
        const cookie = CookieInstation.getCookieInfo();
        const cookieTranslated = jwt(cookie);

        axios.post('/api/Event', {
            name: this.state.name,
            locationId: this.state.placeId,
            date: this.state.date,
            time: this.state.time,
            teamId: cookieTranslated.TeamId,
        }, { headers:{ Authorization: `Bearer ${cookie}` } }).then((response) => {
            response.data.location = this.state.events[0].location; 

            this.setState((state, props) => ({
                events: [response.data, ...state.events] 
            }))
        });
    }

    componentDidMount() {
        axios.get(`/api/Event/ByLocation/${this.state.placeId}`, { headers:{ Authorization: `Bearer ${this.state.cookie}` } }).then((response) => {
            this.setState({events: response.data})
        });
    }
    

    handleInputs(e){
        this.setState({[e.target.name]: e.target.value});

        console.log(e.target.value);
    }

    render(){
        const cookieTranslated = jwt(this.state.cookie);
        console.log(cookieTranslated);

        return (
            <>
                {   
                    <ul className="event__container__single">
                        {this.state.events.map(item => (
                            <li key={item.id}> 
                                <h4>{item.name}</h4>
                                <span>{new Date(item.date).toLocaleString()}</span>
                                <span>{item.location.address}</span>
                                <button>DOŁACZ</button>
                            </li>
                        ))}
                    </ul>
                }

                {
                    parseInt(cookieTranslated.isCaptain) 
                    ? (
                        <div>   
                            <h2>Dodaj nowe wydarzenie</h2>
                            <form onSubmit={this.createNewEvent}>
                                <label>
                                <span>Nazwa wydarzenia </span>
                                <input type="text" name="name" placeholder="Nowa zabawa" onChange={this.handleInputs} />
                                </label>
                
        
                                <div class="divide_half">
                                <label>
                                <span>Data wydarzenia</span>
                                <input type="date" name="date" placeholder="Dzień wydarzenia" onChange={this.handleInputs} />
                                </label>
        
                                <label>
                                <span>Godzina startu</span>
                                <input type="time" name="time" placeholder="04:20" onChange={this.handleInputs} />
                                </label>
                                </div>
        
                                <input type="submit" value="Stworz event" />
                            </form>
                        </div>
                    )
                    : ''
                }

            </>
        )
    }
}

export default withRouter(Place);


