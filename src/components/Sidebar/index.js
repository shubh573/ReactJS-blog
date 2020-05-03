import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';    

/**
 * @author
 * @function Sidebar
 **/

const Sidebar = props => {


    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    },[posts]);


    return(
        <div className="sidebarContainer" style={{width:props.width}}>
             <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About us</span>
                </div>
                <div className="profileImageContainer">
                    <NavLink to="/"><img className="blog" src={require('../../blogPostImages/travel-gifts.jpg')} alt=""/></NavLink>
                </div>
                <div className="cardBody">
                    <p className="personalBio">From the first word to last sign, reader traveled through a new life.
                        It all started with few bags and ended with new stories; Traveling was an unbeatable experience, not less than any glory.
                        Open sky, darkness, silence, stars, my bike and me - an unforgettable travelling group captured in the palm of nature.</p>
                </div> 
            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Socila Network</span>
                </div>
                <div className="socialMed">
                        <a href="#"><img className="facebook" src={require('../../assets/icons/facebook-32.png')} alt=""/></a>
                        <a href="#"><img className="instagram" src={require('../../assets/icons/instagram-32.png')} alt=""/></a>
                        <a href="#"><img className="twitter" src={require('../../assets/icons/twitter-32.png')} alt=""/></a>
                        <a href="#"><img className="linkedin" src={require('../../assets/icons/linkedin-32.png')} alt=""/></a>
                        <a href="#"><img className="pinterest" src={require('../../assets/icons/pinterest-32.png')} alt=""/></a>
                    </div>
            </Card>

            <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>  

                <div className="recentPosts">
                    {
                        posts.map(post=>{
                            return(
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>  
                            );
                        })
                    }
                </div>
            </Card>
        </div>
       
    )
}

export default Sidebar;
