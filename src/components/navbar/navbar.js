import react from "react";
import './navbar.css';

const Navbar =()=>{
    return(
        <div className="navbarcontainer">
            <div className="navelementcontainer">
                <ul>
                    <li><a href="/">Articles</a></li>
                    <li><a href="/messages">Messages</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;