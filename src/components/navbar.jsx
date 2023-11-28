import {useNavigate} from "react-router";
import "../styles/navbar.scss";
import { useState } from "react";
const Navbar = ()=>{
    const [show, setShow] = useState();
    const navItems = [
        
            { name:"Shopping", link:"" },
            {name:"Street Eats", link:""},
            {name:"Gaming", link:""},
            {name:"Live Shows", link:""},
            {name:"Exibitions", link:""}
        
    ]
    return (
       <div className="navbar-container">
        <div className="navitem">
        <div className="categories" >Categories
        <div className="dropdown">
                <ul>
                    {navItems.map((e)=>{
                        return(
                            <li>{e.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
        <div className="nearme">Activites Near Me</div>
        <div className="addPlace">Add a Place</div>
        </div>
        <div className="navitem-explore">Start Explore</div>
       </div>
    )
}

export default Navbar;