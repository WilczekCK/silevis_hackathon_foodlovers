import React from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import calendar_icon from '../assets/icons/icon_calendar_grey.png';
import team_icon from '../assets/icons/icon_team_grey.png';


class Homepage extends React.Component{
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
        this.test = this.test.bind(this);
    }

    logout(){
        this.props.onLogout();
    }
    
    test(){
        const cookie = Cookies.get("hackathon_project");

        axios.post('/api/Message/Event', {
            eventId: 2,
            content: "jp",
        }, { headers:{ Authorization: `Bearer ${cookie}` } }).then((response) => {
            console.log(response)
        });
    }

    render(){
        return (
            <div className="homepage__container">
                <h1>Witaj<br/> w BookSport!</h1>
                <p>Wyszukaj miejsce, znajdź lub utwórz druzynę i zagrajcie razem w piłkę nozną</p>
               
                <div class="homepage__container__bottomAlign">
                    <a> <img src={team_icon}/> Moja druzyna</a>
                    <a> <img src={calendar_icon}/> Najblizsze wydarzenia</a>

                    <hr/>
                </div>
            </div>
        )
    }
}

export default Homepage;