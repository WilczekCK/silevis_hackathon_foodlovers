import React from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import CookieInstation from "../controllers/cookieController";
import jwt from 'jwt-decode'
import crown_icon from '../assets/icons/icon_korona.png';


class Teams extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            TeamId: null,
            teams: [],
            
            teamMembers: [], //only for ppl who are in team!
            teamName: '', //only for ppl who are in team!
            capitanId: '', //only for ppl who are in team!
            
            cookie: CookieInstation.getCookieInfo(),
            hideContent: true,
        };

        if(this.state.cookie.TeamId !== ''){
            CookieInstation.getCookieInfo();
        }

        this.joinTeam = this.joinTeam.bind(this);
    }

    componentDidMount() {
        const cookieTranslated = jwt(this.state.cookie);

        axios.get(`/api/Team/`, { headers:{ Authorization: `Bearer ${this.state.cookie}` } }).then((response) => {
            this.setState({teams: response.data})

            response.data.forEach(team => {
                team.people.forEach(teamMember => {
                    if( parseInt(teamMember.id) === parseInt(cookieTranslated.Id)){
                        // XD TEMP
                        this.setState({TeamId: team.id, teamMembers: team.people, teamName: team.name, capitanId: team.captainId});
                    }
                })
            })

            this.setState({hideContent: false})
        });
    }

    joinTeam(e){
        const teamId = e.target.attributes['data-team-id'].value;
        const cookieTranslated = jwt(this.state.cookie);

        axios.post('/api/Team/AddPerson', {
            teamId,
            personId: cookieTranslated.Id
        }, { headers:{ Authorization: `Bearer ${this.state.cookie}` } }).then((response) => {
            this.setState({ TeamId: response.data.id, teamMembers: response.data.people, teamName: response.data.name, capitanId: response.data.captainId })
        });
    }

    render(){
        return (
            <div class="teams__container" className={this.state.hideContent ? 'hidden' : ''}>
                
                {this.state.TeamId !== null
                ? (
                    <>
                        <h1>Druzyna <br/>{this.state.teamName}</h1>
                        
                        <div className="teams__container__list">
                        {this.state.teamMembers.map(item => (
                            <li key={item.id}> 
                                <h4> {this.state.capitanId === item.id ? <img src={crown_icon} /> : ''} {item.firstName} {item.lastName}</h4>
                            </li>
                        ))}
                    </div>
                    </>
                )
                : (
                    <>
                    <h1>Druzyna</h1>
                    <h3>Nie masz jeszcze druzyny? <br/>Potrzebujemy Cie w naszym składzie!<br/></h3>

                    <div className="teams__container__list">
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


