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
        this.displayProperButton = this.displayProperButton.bind(this);
        this.addToEvent = this.addToEvent.bind(this);
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
    }

    addToEvent(e){
        const cookieTranslated = jwt(this.state.cookie);
        const eventId = e.target.attributes['data-event-id'].value;
        e.target.value = "DOŁACZONO";

        
        axios.post(`/api/Event/AddTeam/`, {
            teamId: cookieTranslated.TeamId,
            eventId
        }, { headers:{ Authorization: `Bearer ${this.state.cookie}` } }).then((response) => {
        });
    }


    displayProperButton( eventTeamId, cookieTranslated, secondTeam, eventId ){
        if(parseInt(eventTeamId) === parseInt(cookieTranslated.TeamId)){
            return (<button>DOŁACZONO</button>)
        } else if(  secondTeam === undefined  ) {
            return (<button data-event-id={eventId} onClick={this.addToEvent}>DOŁACZ</button> )
        } else {
            return (<button>BRAK MIEJSC</button> )
        }
    }

    render(){
        const cookieTranslated = jwt(this.state.cookie);

        return (
            <>
                {   
                    <ul className="event__container__single">
                        {this.state.events.map(item => (
                            <li key={item.id}> 
                                <h4>{item.name}</h4>
                                <span>{new Date(item.date).toLocaleString()}</span>
                                <span>{item.location.address}</span>
                            
                                { this.displayProperButton(item.teams[0].id, cookieTranslated, item.teams[1], item.id) }
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


