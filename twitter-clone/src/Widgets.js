import React from 'react';
import "./Widgets.css";
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';


function Widgets() {
    return (
        <div className="widgets">
        <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon"/>
        <input placeholder="Search Twitter" type="text"/>
        </div>
        
        <div className="widgets_widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed 
        tweetID={"1352261539550650371"}>
        </TwitterTweetEmbed>

        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">How are you holding up as a new programmer? <a href="https://twitter.com/hashtag/coding?src=hash&amp;ref_src=twsrc%5Etfw">#coding</a> <a href="https://twitter.com/hashtag/SoftwareEngineer?src=hash&amp;ref_src=twsrc%5Etfw">#SoftwareEngineer</a> <a href="https://twitter.com/hashtag/python?src=hash&amp;ref_src=twsrc%5Etfw">#python</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/code?src=hash&amp;ref_src=twsrc%5Etfw">#code</a> <a href="https://twitter.com/hashtag/CodeNewbie?src=hash&amp;ref_src=twsrc%5Etfw">#CodeNewbie</a> <a href="https://t.co/rPX6pFeuqP">pic.twitter.com/rPX6pFeuqP</a></p>&mdash; Michael Raysor (@RaysorMichael19) <a href="https://twitter.com/RaysorMichael19/status/1309479671898279936?ref_src=twsrc%5Etfw">September 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Because Coding isss.... Fun sir? <a href="https://twitter.com/hashtag/100daysofcoding?src=hash&amp;ref_src=twsrc%5Etfw">#100daysofcoding</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/python?src=hash&amp;ref_src=twsrc%5Etfw">#python</a> <a href="https://twitter.com/hashtag/hackers?src=hash&amp;ref_src=twsrc%5Etfw">#hackers</a> <a href="https://twitter.com/hashtag/ivyleague?src=hash&amp;ref_src=twsrc%5Etfw">#ivyleague</a> <a href="https://twitter.com/hashtag/Software?src=hash&amp;ref_src=twsrc%5Etfw">#Software</a> <a href="https://t.co/ECsoZ0ReHw">pic.twitter.com/ECsoZ0ReHw</a></p>&mdash; Michael Raysor (@RaysorMichael19) <a href="https://twitter.com/RaysorMichael19/status/1349722394689228808?ref_src=twsrc%5Etfw">January 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">You ever get a nose bleed when trying to find a bug in your code, or solving a problem? <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a> <a href="https://twitter.com/hashtag/python?src=hash&amp;ref_src=twsrc%5Etfw">#python</a> <a href="https://twitter.com/hashtag/pythonprogramming?src=hash&amp;ref_src=twsrc%5Etfw">#pythonprogramming</a> <a href="https://twitter.com/hashtag/Election2020?src=hash&amp;ref_src=twsrc%5Etfw">#Election2020</a> <a href="https://twitter.com/hashtag/election?src=hash&amp;ref_src=twsrc%5Etfw">#election</a> <a href="https://twitter.com/hashtag/TRUMP2020ToSaveAmerica?src=hash&amp;ref_src=twsrc%5Etfw">#TRUMP2020ToSaveAmerica</a> <a href="https://twitter.com/hashtag/Biden2020?src=hash&amp;ref_src=twsrc%5Etfw">#Biden2020</a> <a href="https://twitter.com/hashtag/BidenHarris?src=hash&amp;ref_src=twsrc%5Etfw">#BidenHarris</a> <a href="https://twitter.com/hashtag/ByeByeTrump?src=hash&amp;ref_src=twsrc%5Etfw">#ByeByeTrump</a> <a href="https://twitter.com/hashtag/Bitcoin?src=hash&amp;ref_src=twsrc%5Etfw">#Bitcoin</a> <a href="https://twitter.com/hashtag/BelowDeck?src=hash&amp;ref_src=twsrc%5Etfw">#BelowDeck</a> <a href="https://t.co/4cQ2SsGRB2">pic.twitter.com/4cQ2SsGRB2</a></p>&mdash; Michael Raysor (@RaysorMichael19) <a href="https://twitter.com/RaysorMichael19/status/1324449872699920384?ref_src=twsrc%5Etfw">November 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="cleverqazi"
        options={{ height: 400 }}>
        </TwitterTimelineEmbed>

        <TwitterShareButton url={"https://www.linkedin.com/in/michaelraysor/"}
        options={{ text: "#reactjs is awesome", via: "michaelraysor"}}>
        </TwitterShareButton>
        </div>
        </div>
        
    );
}

export default Widgets;
