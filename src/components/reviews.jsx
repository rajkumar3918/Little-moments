import "../styles/reviews.scss";

const Reviews = ()=>{
    const reviewsData = [
        {
            name:"Glen Maxwell",
            date:"Aug 5, 2023",
            from:"Australia",
            rating:"5",
            title:"The best out there",
            desc:"Chinese history is filled with things to marvel at, from ancient palaces, a forbidden city, and temples to modern skyscrapers and beaches. The country's tourist attractions include multiple UNESCO World Heritage sites.",
        },
        {
            name:"Trent Bolt",
            date:"june 20, 2023",
            from:"Newzland",
            rating:"5",
            title:"A must have trip",
            desc:"Escape to the peaceful surroundings of the Summer Palace in Beijing, once the summer residence of the imperial court. Explore the sprawling park and palace complex, surrounded by tranquil gardens and lakes, for a glimpse into the lifestyle of China's imperial rulers.",
        },
        {
            name:"Babar Azam",
            date:"Aprl 15, 2023",
            from:"Pakistan",
            rating:"5",
            title:"Defenetly The best out there",
            desc:"Discover one of China's most famous landmarks‒the Great Wall of China. Stretching over 13,000 miles and dating back over 2,000 years, the Great Wall was built to protect the country from invaders and is now a top tourist destination. Explore sections of the wall, admire the scenic views, and learn about its history.",
        }
    ]
    return(
        <div className="reviews-cont">
            <h1 className="title">REVIEWS</h1>
            <h1 className="rating">5.0</h1>
            <button className="revieww-btn">Write a Review</button>
            {reviewsData.map((e)=>{
                return(
                    <div className="review-item-cont">
                        <div className="name-from">
                            <p>{e.name}</p>
                            <p className="from">{e.from}</p>
                        </div>
                        <div className="comment">
                            <h1 >{e.title}</h1>
                            <p>{e.desc}</p>
                        </div>
                        <div className="date">
                            <p>{e.date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Reviews;