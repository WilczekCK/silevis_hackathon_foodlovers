import React from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import CookieInstation from "../controllers/cookieController";
import jwt from 'jwt-decode'


class Teams extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            TeamId: null,
            teams: [],
            
            teamMembers: [], //only for ppl who are in team!
            teamName: '', //only for ppl who are in team!
            capitanId: '', //only for ppl who are in team!
            
            cookie: CookieInstation.getCookieInfo()
        };

        if(this.state.cookie.TeamId !== ''){
            CookieInstation.getCookieInfo();
        }

        this.joinTeam = this.joinTeam.bind(this);
    }

    componentDidMount() {
        const cookieTranslated = jwt(this.state.cookie);

        if(cookieTranslated.TeamId === ''){
            axios.get(`/api/Team/`, { headers:{ Authorization: `Bearer ${this.state.cookie}` } }).then((response) => {
                this.setState({teams: response.data})
            });
        }
    }

    joinTeam(e){
        const teamId = e.target.attributes['data-team-id'].value;
        const cookieTranslated = jwt(this.state.cookie);

        axios.post('/api/Team/AddPerson', {
            teamId,
            personId: cookieTranslated.Id
        }, { headers:{ Authorization: `Bearer ${this.state.cookie}` } }).then((response) => {
            console.log(response);

            
            this.setState({ TeamId: response.data.id, teamMembers: response.data.people, teamName: response.data.name, capitanId: response.data.captainId })
        });
    }

    render(){
        return (
            <div class="teams__container">
                
                {this.state.TeamId !== null
                ? (
                    <>
                        <h1>Druzyna <br/>{this.state.teamName}</h1>
                        
                        <div class="teams__container__list">
                        {this.state.teamMembers.map(item => (
                            <li key={item.id}> 

                                <h4> {this.state.capitanId === item.id ? 'chuj' : ''} {item.firstName} {item.lastName}</h4>
                            </li>
                        ))}
                    </div>
                    </>
                )
                : (
                    <>
                    <h1>Druzyna</h1>
                    <h3>Nie masz jeszcze druzyny? <br/>Potrzebujemy Cie w naszym składzie!<br/></h3>

                    <div class="teams__container__list">
                        {this.state.teams.map(item => (
                            <li key={item.id}> 
                                <h4>{item.name}</h4>
                                <button data-team-id={item.id} onClick={this.joinTeam}>DOŁACZ</button>
                            </li>
                        ))}
                    </div>
                    </>
                  )
                }

            </div>
        )
    }
}

export default Teams;


