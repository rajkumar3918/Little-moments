import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/home.scss";
import { FcLike, FcShare  } from "react-icons/fc";
import { IoIosStarOutline, IoMdAddCircle } from "react-icons/io";
import { MdLocationPin, MdPhone } from "react-icons/md";
import Reviews from "../components/reviews";
import Activites from "../components/Activites";

const Home = ()=>{
    const [show, setShow] = useState(false)
    const imgs = {
        src1: require("../media/china.jpg"),
        src2: require("../media/light.jpg"),
        src3: require("../media/man.jpg"),
        src4: require("../media/road.jpg"),
        src5: require("../media/ship.jpg")
    }
    const overView = [
        {title: "OVERVIEW", 
        desc: "Hangzhou is also ranking as one of the most scenic cities in China. As a city of gardens, temples, and lakes, Hangzhou's beauty is praised in all ages. There is an old Chinese saying goes like this: “In heaven there is paradise; on earth there are Suzhou and Hangzhou"},
        {title: "FEATURES", 
        desc: "Hangzhou is also ranking as one of the most scenic cities in China. As a city of gardens, temples, and lakes, Hangzhou's beauty is praised in all ages. There is an old Chinese saying goes like this: “In heaven there is paradise; on earth there are Suzhou and Hangzhou"},
        {title: "LISTING VIDEOS",
            vedios:[require("../media/video1.mp4"), require("../media/video2.mp4"), require("../media/video3.mp4"), require("../media/video4.mp4")]}
    
    ]
    const dropdownHandler = (ele)=>{
        const element = ele.currentTarget.parentElement;
        const childElement = element.querySelector('.none');
        childElement.classList.toggle("overview-dropdown")
        // console.log()
    }
    return (
        <div className="home">
            <div >
                <Navbar/>
            </div>

            <div className="place-data">
                <div className="popular-imgs">

                <div className="division1">
                 <img className="main-img" src={imgs.src1} alt="" />
                </div>
                <div className="division2">
                 <img src={imgs.src2} alt="" />
                 <img src={imgs.src3} alt="" />
                 <img src={imgs.src4} alt="" />
                 <img src={imgs.src5} alt="" />
                </div>
                </div>

                <div className="plcae-name-card">
                    <span className="reviews"><IoIosStarOutline style={{color:"gold"}}/> 4.9 star</span>
                    <h1 className="title">TSYKSHIMA MONJA STREET</h1>
                    <p className="desc">User can easily find the perfect experinces to suite their intrests. User can easily find the perfect experinces to suite their intrests.  </p>
                    <span className="contact">
                        <p><MdLocationPin/> Texas, united states</p>
                        <p><MdPhone/> +216 1234 5443</p>
                    </span>

                    <div className="like-share">
                        <button><FcLike/></button>
                        <button><FcShare/></button>
                    </div>
                </div>

                <div className="overview-location">
                <div className="overview-cont">
                    {overView.map((e)=>{
                        return (
                            <div className="overview-item">
                                <p className="close" onClick={dropdownHandler}><IoMdAddCircle/></p>
                                <h1>{e.title}</h1>
                                <div className="none">
                                {e.desc? <p>{e.desc}</p>:""}
                                {e.vedios? e.vedios.map((url)=>{
                                    return (
                                        <iframe src={url}/>
                                        )
                                    }):"" }
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="location">
                    <h1 className="title">LOCATION</h1>
                </div>
                </div>
            </div>

            <div className="review-section">
            <Reviews/>
            </div>

            <div className="activities-section">
            <h1 className="card-headline">RELATED ACTIVITIES</h1>
                <Activites/>
            </div>

            <div className="footer-section">
                <marquee behavior="scroll" direction="left">LIKE NEVER BEFOUR <span>Exlusive Offers & Deals</span> LIKE NEVER BEFOUR <span>Exlusive Offers & Deals </span> LIKE NEVER BEFOUR <span>Exlusive Offers & Deals</span> LIKE NEVER BEFOUR <span>Exlusive Offers & Deals </span></marquee>
                <div className="footer">
                    <div>
                        <h1>WEBSITE</h1>
                        <p>Categories</p>
                        <p>Activities Near Me</p>
                        <p>Add a Place</p>
                    </div>
                    <div>
                        <h1>IMPORTANCE</h1>
                        <p>Tearms and conditions</p>
                        <p>privacy policy</p>
                        <p>Terms of useage</p>
                    </div>
                    <div>
                        <h1>CONTACT</h1>
                        <p><MdLocationPin/> Mumbai India</p>
                        <p><MdPhone/> +91 998 776 9876</p>
                    </div>
                </div>
                <p className="sublogo">All rights reserved by LittleMoments.in</p>
                <p className="logo">LITTlE MOMENTS</p>
            </div>
        </div>
    )
};

export default Home;