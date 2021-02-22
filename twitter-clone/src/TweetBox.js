import React, { useState } from 'react';
import "./TweetBox.css";
import {Avatar , Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Michael Raysor',
      username: 'RaysorMichael19',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:"https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-1/p200x200/53364402_10100280538331510_6554279033255755776_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=BeNzk4O3JRYAX-z_2L9&_nc_ht=scontent-msp1-1.xx&tp=6&oh=6f9d5ab50954a34ba9147a0451343880&oe=6037EE4C"
    });
    setTweetMessage("");
    setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
            <div className="tweetBox_input">
            <Avatar src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-1/p200x200/53364402_10100280538331510_6554279033255755776_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=BeNzk4O3JRYAX-z_2L9&_nc_ht=scontent-msp1-1.xx&tp=6&oh=6f9d5ab50954a34ba9147a0451343880&oe=6037EE4C"/>
            <input 
            onChange={(e) => setTweetMessage(e.target.value)} 
            value={tweetMessage} 
            placeholder="Whats happening?" 
            type= "text" 
            />
           </div>
           <input 
           value={tweetImage}
           onChange={(e) => setTweetImage(e.target.value)}
           claassName="tweetBox_imageInput" 
           placeholder="Optional: Enter image URL" 
           type="text"
           />

        <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton"></Button>
        </form>
        </div>
    )
}

export default TweetBox;

