import React from 'react';
import './style.css';

/**
 * @author
 * @function
 **/

const Logo = (props) => {
    return(
        <div className="logo">
            <a href="#"><img className="trav" src={require('../../assets/icons/travelsurface.png')} alt=""/></a>
        </div>
    );
}

export default Logo