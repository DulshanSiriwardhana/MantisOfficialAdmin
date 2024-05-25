import React, { useEffect, useState } from "react";
import './article.css'
import axios from 'axios';
import Textmaker from "../../textmaker/textmaker";
import Video from "../video/video";
import Cover from "../cover/cover";

const Article =(props)=>{
    const {articleId} = props;
    const [article, setArticle] = useState(null);
    const [youtubeID, setYoutubeID] = useState('');

    useEffect(()=>{
        getArticle();
    },[]);

    const getArticle =async()=>{
        await axios.get(`https://mantisofficialbackend.onrender.com/articles/${articleId}`)
        .then((response)=>{
            console.log(response.data);
            setArticle(response.data);
            setYoutubeID(getID(response.data.article.video));
        });
    }
    const getID =(link)=>{
        var id = "";
        var pivot=0;
        for(var i=0;i<link.length;i++){
            if(link[i]==='=' || pivot===1){
                if(pivot===1){
                    id+=link[i];
                }
                pivot=1;
                
            }
        }
        return id;
    }
    console.log(youtubeID);
    if(article){
        return(
            <div className="articlecontainer">
                <div>
                    {article.article.name}
                </div>
                <div className="articlecovercontainer">
                    <Cover Image={article.article.cover}/>
                </div>
                <div className="articledescription">
                    <Textmaker Text ={article.article.description}/>
                </div>
                <div className="articlevideocontainer">
                    <Video url = {article.article.video}/>
                </div>
                <div className="articlegitlink">
                    <a href={article.article.link}>Go to github repository</a>
                </div>
            </div>
        );
    }
}

export default Article;