import "../styles/activities.scss";
import { MdLocationPin, MdPhone } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";

const Activites = ()=>{

    const cardData = [
        {
            img : require("../media/city.jpg"),
            title : "Tsukhima Monja Street",
            activite : "PLACE",
            rating: "4.9",
            date: "November 2, 2023",
            place : "New York",
            budget: "22",
            phone : "+216 2234 5443",
            popular : true
        },
        {
            img : require("../media/bora.jpg"),
            title : "Bora Mountains",
            activite : "OUTDOOR ACTIVITIES",
            rating: "5.0",
            date: "October 4, 2021",
            place : "United States",
            budget: "52",
            phone : "+216 2234 5443",
            popular : false
        },
        {
            img : require("../media/woman.jpg"),
            title : "Big Bottom Borders",
            activite : "OUTDOOR ACTIVITIES",
            rating: "4.2",
            date: "November 4, 2021",
            place : "New York",
            budget: "22",
            phone : "+216 2234 5443",
            popular : false
        }
    ]
    return(
        <div className="card-cont">
            {cardData.map((e)=>{
                return(
                    <div className="card-item-cont">
                        <div className="card-img">
                            <img src={e.img} alt="" />
                            <p>{e.activite}</p>
                            {e.popular? <span>Popular</span>:""}
                        </div>
                        <div className="card-details">
                            <p className="date">{e.date}</p>
                            <p className="rate"><IoIosStarOutline style={{color:"gold"}}/> {e.rating}</p>
                            <h2>{e.title}</h2>
                            <p className="price">$$ {e.budget}</p>
                        <div className="contact-details">
                            <p><MdLocationPin/> {e.place}</p>
                            <p><MdPhone/> {e.phone}</p>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Activites;