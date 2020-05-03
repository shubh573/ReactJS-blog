import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';

import Footer from '../../components/Footer';

/**
 * @author
 * @function AboutUs
 **/

const AboutUs = props => {
    return(
        <div className="about">
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                    <span>About us</span>
            </div>
            <div className="profileImageContainer">
                <img className="blog" src={require('../../blogPostImages/travel-gifts.jpg')} alt=""/>
            </div>
            <div className="cardBody">
                <p className="personalBio">From the first word to last sign, reader traveled through a new life.
                    It all started with few bags and ended with new stories; Traveling was an unbeatable experience, not less than any glory.
                    Open sky, darkness, silence, stars, my bike and me - an unforgettable travelling group captured in the palm of nature.</p>
            </div> 
            
        </Card>
        <Footer/>
        </div>
        
    )
}
    
export default AboutUs;