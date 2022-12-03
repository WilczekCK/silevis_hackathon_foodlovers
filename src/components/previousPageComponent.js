import React from "react";
import { Link } from 'react-router-dom';

class PreviousPageButton extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="login_toolbar">
                <Link to="/"> <button> &lsaquo; WROC </button> </Link> 
            </div>
        )
    }
}

export default PreviousPageButton;