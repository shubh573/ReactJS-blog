import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';


/**
 * @author
 * @function
 **/

const Header= (props) => {
    return(
        <header className="header">
            <div className="headerMenu">
                <NavLink to="/"><img className="blog" src={require('../../assets/icons/RSS-32.png')} alt=""/></NavLink>
            </div>
            
            <div className="socialMed">
                
                <a href="#"><img className="facebook" src={require('../../assets/icons/Fb32.png')} alt=""/></a>
                <a href="#"><img className="instagram" src={require('../../assets/icons/Inst32.png')} alt=""/></a>
                <a href="#"><img className="twitter" src={require('../../assets/icons/Tw32.png')} alt=""/></a>
                <a href="#"><img className="linkedin" src={require('../../assets/icons/in32.png')} alt=""/></a>
                <a href="#"><img className="pinterest" src={require('../../assets/icons/Pin32.png')} alt=""/></a>
            </div>
        </header>
    )
}

export default Header