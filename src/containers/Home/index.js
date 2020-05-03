import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json'
import Layout from '../../components/Layout';



const SideImage = props => {

    
    return (
        
        <div style={{height:`${props.height}px`}}>
            
            <img src={props.src} alt=""/>
        </div>
    );
    
}   


const ImageGallary = props =>( 

<div className="gallaryPost" style={props.gallaryStyle}>

    <section style={{width:props.largWidth}}>
        <div class="mainImageWrapper">
            <img src={require('../../blogPostImages/'+props.imagesArray[3])} alt=""/>
        </div>          
    </section>
    <section className={"sideImageWrapper"} style={{width:props.smallWidth}}>

        {
            props.imagesArray.map(image =>
                <SideImage
                    height={props.sideImageHeight}
                    src={require('../../blogPostImages/'+ image)} alt=""
                />
            )
        }
    
    </section>
</div>
);


const Home = props => {

    const gallaryHeight = 350;
    const gallaryStyle = {
        height: gallaryHeight+'px',
        overflow: 'hidden'
    }

    const sideImageHeight = gallaryHeight/3;

    const imgAr = blogData.data.map(post=>post.blogImage)
   
    return (    
        <div>
            <Card> 
                <ImageGallary
                    largWidth="70%"
                    smallWidth="30%"
                    sideImageHeight = {sideImageHeight}
                    gallaryStyle = {gallaryStyle}
                    imagesArray={imgAr}
                />
            </Card>

            <Layout>
               <div style={{width:'72%'}}>
                <RecentPosts/> 
                </div>
            </Layout>
        
        </div>
    );
}

export default Home;