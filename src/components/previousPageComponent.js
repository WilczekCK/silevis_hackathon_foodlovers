import React from "react";
import { Link } from 'react-router-dom'

class PreviousPageButton extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div class="login_toolbar">
                <Link to="/"> <button>  BACK </button> </Link> 
            </div>
        )
    }
}

export default PreviousPageButton;