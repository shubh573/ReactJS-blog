import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';

import Footer from '../../components/Footer';

/**
 * @author
 * @function ContactUs
 **/

const ContactUs = props => {
    return(
        <div className="contact">
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                    <span>This is Contact us page</span>
            </div>
            <div className="socialMed">
                    <a href="#"><img className="facebook" src={require('../../assets/icons/facebook-32.png')} alt=""/></a>
                    <a href="#"><img className="instagram" src={require('../../assets/icons/instagram-32.png')} alt=""/></a>
                    <a href="#"><img className="twitter" src={require('../../assets/icons/twitter-32.png')} alt=""/></a>
                    <a href="#"><img className="linkedin" src={require('../../assets/icons/linkedin-32.png')} alt=""/></a>
                    <a href="#"><img className="pinterest" src={require('../../assets/icons/pinterest-32.png')} alt=""/></a>
            </div>
        </Card>
        <Footer/>
        </div>
    )
}
    
export default ContactUs;
