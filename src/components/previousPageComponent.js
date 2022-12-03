import React from "react";
import { Link } from 'react-router-dom'

class PreviousPageButton extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <>
                <Link to="/"> BACK </Link>
            </>
        )
    }
}

export default PreviousPageButton;