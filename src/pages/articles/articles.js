import React, { useEffect, useState } from "react";
import './articles.css'
import axios from "axios";
import Article from "../../components/article/article";
import { ScrollRestoration } from "react-router-dom";

const Articles =()=>{
    const [articles, setArticles] = useState(null);
    const [name, setArticlehead] =useState('');
    const [cover, setarticlecover] =useState('');
    const [description, setArticledescription] =useState('');
    const [video, setArticlevideo] =useState('');
    const [document, setArticledocument] =useState('');
    const [link, setArticlegitlink] =useState('');

    useEffect(()=>{
        getArticles();
    },[]);

    const handleSubmit =async()=>{
        console.log(name);
        console.log(cover);
        console.log(description);
        console.log(video);
        console.log(document);
        console.log(link);
        try{
            const res = await axios.post('https://mantisofficialbackend.onrender.com/articles/',{
                name,
                cover,
                description,
                link,
                video,
                document
            })
            if(res.data){
                alert("Success");
                setArticlehead('')
                setarticlecover('');
                setArticledescription('');
                setArticlevideo('');
                setArticlevideo('');
                setArticledocument('');
                setArticlegitlink('');
            } else{
                alert("Error submitting the article");
            }
        } catch{
            alert('Error submitting');
        }
    }

    const getArticles =async()=>{
        const res = await axios.get(`${process.env.REACT_APP_SERVER}articles/`);
        setArticles(res);
    }
    console.log(articles);
    return(
        <div className="articlescontainer">
            <div className="articlecreatecontainer">
                <div className="articleform">
                    <label>Heading</label>
                    <input value={name} onChange={(e)=>setArticlehead(e.target.value)} className="inputheading" type="textbox"/>
                    <label>Cover Image link</label>
                    <input value={cover} onChange={(e)=>setarticlecover(e.target.value)} className="inputcover" type="textbox"/>
                    <label>Description</label>
                    <input value={description} onChange={(e)=>setArticledescription(e.target.value)} className="inputdescription" type="textbox"/>
                    <label>Video link</label>
                    <input value={video} onChange={(e)=>setArticlevideo(e.target.value)} className="inputvideo" type="textbox"/>
                    <label>Document link</label>
                    <input value={document} onChange={(e)=>setArticledocument(e.target.value)} className="inputgithub" type="textbox"/>
                    <label>Github link</label>
                    <input value={link} onChange={(e)=>setArticlegitlink(e.target.value)} className="inputdocumnet" type="textbox"/>
                    <button onClick={handleSubmit} className="articlesubmit">Submit</button>
                </div>
            </div>
            <div className="articleslistcontainer">
                {<div>
                    {articles?(articles.data.map((line)=>(
                        <div key={line._id}>{<Article articleId={line._id}/>}</div>
                    ))):null}
                </div>}
            </div>
        </div>
    );
}

export default Articles;