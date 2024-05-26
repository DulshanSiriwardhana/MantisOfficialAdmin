import React, { useEffect, useState } from "react";
import axios from 'axios';
import './messages.css'

const Messages =()=>{
    const [messages, setMessages] =useState(null);
    console.log("Success");

    useEffect(()=>{
        getMessages();
        console.log(messages)
    },[]);

    const getMessages =async()=>{
        const res = await axios.get('https://mantisofficialbackend.onrender.com/messages/');
        setMessages(res.data);
    }

    return(
        <div className="messagescontainer">
            {messages?(messages.map((line)=>(
                <div className="messagebox" key={line._id}>
                    <h1>
                        {line.email}
                    </h1>
                    <p>
                        {line.message}
                    </p>
                </div>
            ))):null}
        </div>
    );
}

export default Messages;