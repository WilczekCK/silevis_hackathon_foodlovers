import React from "react";

class Homepage extends React.Component{
    constructor(){
        super();
    }


    render(){
        return (
            <>
                <h1>Witaj<br/> w BookSport!</h1>
                <p>Wyszukaj miejsce, znajdź lub utwórz druzynę i zagrajcie razem w piłkę nozną</p>
               
                <div class="homepage__container__bottomAlign">
                    {!this.props.isLoggedIn 
                        ? (
                            <div class="homepage__container_bottomAlign--horizontal">
                                <button>Zaloguj sie</button>
                                <button>Zarejestruj sie</button>
                            </div>
                        )  : '' }


                    <a>Moja druzyna</a>
                    <a>Najblizsze wydarzenia</a>

                    <hr/>
                </div>
                
            </>
        )
    }
}

export default Homepage;