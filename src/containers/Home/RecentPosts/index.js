import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

import Card from '../../../components/UI/Card';
import blogPost from '../../../data/blog.json';  


/**
 * @author
 * @function RecentPosts
 **/

const RecentPosts = props => {

    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    },[posts]);

    return(
        <div className="container" style={props.style}>
                <Card name="quickPost" style={{marginBottom:'20px'}}>
                    {
                        posts.map(post=>{
                            return(
                            // <Card name="quickPost">
                            <div className="recentPostContainer">
                                <div className="postImageWrapper">    
                                    <img src={require('../../../blogPostImages/'+post.blogImage)} alt="Post Image"/>
                                </div>
                                <span>{post.blogCategory}</span>
                                <h3>{post.blogTitle}</h3>
                                <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
                                <p>{post.blogText}</p>
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <button>Read More</button>
                                </NavLink>  
                                </div>
                                // </Card>
                                
                            );
                        })
                    }

                </Card>
            </div>
    )
}

export default RecentPosts;