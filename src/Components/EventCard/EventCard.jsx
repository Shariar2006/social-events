import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import '../../index.css'



const EventCard = () => {
    const [card, setCard] = useState()

    const { id } = useParams()


    const singleCard = useLoaderData()

    useEffect(() => {
        const findCard = singleCard?.find(singleCard => singleCard.id == id)
        setCard(findCard)
    }, [id, singleCard])
    console.log(card)



    return (
        <div className=" my-4">
            <div className="card w-3/4 mx-auto  bg-base-100 shadow-xl">
                <figure><img className="w-full h-[30vh] md:h-[60vh] lg:h-[80vh]" src={card?.them_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl lg:text-3xl font-bold font">{card?.EventType}</h2>
                    <h4 className="text-lg lg:text-xl font-semibold font">{card?.event_title}</h4>
                    <p className="lg:text-lg text-gray-600 font">{card?.Description}</p>
                    <div className="flex justify-between">
                        <p className="lg:text-xl font-medium font">Price: {card?.price}</p>
                        <span className="lg:text-xl font-medium font">Location: {card?.Location}</span>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-pink-500 text-white hover:bg-pink-700 w-full font">Event Booking Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default EventCard;