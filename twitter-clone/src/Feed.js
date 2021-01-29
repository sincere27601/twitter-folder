import React from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            
        <div className="feed_header">
        <h2>Home</h2>
        </div>
            
            
            <TweetBox />

            <Post 
            displayName="Michael Raysor"
            username='RaysorMichael19'
            verified={true}
            text="YOOO its working"
            avatar="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-1/p200x200/53364402_10100280538331510_6554279033255755776_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=BeNzk4O3JRYAX-z_2L9&_nc_ht=scontent-msp1-1.xx&tp=6&oh=6f9d5ab50954a34ba9147a0451343880&oe=6037EE4C"
            image="https://media1.tenor.com/images/a71951f8b372f2872efb24101e0709f5/tenor.gif?itemid=12515759"
            />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
           
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    )
}

export default Feed;
