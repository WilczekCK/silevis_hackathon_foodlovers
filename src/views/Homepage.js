import React from "react";
import axios from "axios";
import calendar_icon from '../assets/icons/icon_calendar_white.png';
import team_icon from '../assets/icons/icon_team_white.png';
import ball_logo from '../assets/icons/logo_ball.png';
import {Link} from 'react-router-dom';


class Homepage extends React.Component{
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.onLogout();
    }

    render(){
        return (
            <div className="homepage__container">
                <img src={ball_logo} />
                <h1>Witaj<br/> w BookSport!</h1>
                <p>Wyszukaj miejsce, znajdź lub utwórz druzynę i zagrajcie razem w piłkę nozną</p>
               
                <div className="homepage__container__bottomAlign">
                    <Link to={'/teams'}> <img src={team_icon}/> Moja druzyna</Link>
                    <Link to={'/events'}> <img src={calendar_icon}/> Najblizsze wydarzenia</Link>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default Homepage;