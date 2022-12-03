import React from "react";

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
                <h1>Witaj<br/> w BookSport!</h1>
                <p>Wyszukaj miejsce, znajdź lub utwórz druzynę i zagrajcie razem w piłkę nozną</p>
               
                <div class="homepage__container__bottomAlign">
                    <a>Moja druzyna</a>
                    <a>Najblizsze wydarzenia</a>

                    <hr/>
                </div>
            </div>
        )
    }
}

export default Homepage;