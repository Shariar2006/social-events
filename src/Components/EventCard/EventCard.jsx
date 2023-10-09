import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import '../../index.css'
import swal from "sweetalert";



const EventCard = () => {
    const [card, setCard] = useState()

    const { id } = useParams()


    const singleCard = useLoaderData()

    useEffect(() => {
        const findCard = singleCard?.find(singleCard => singleCard.id == id)
        setCard(findCard)
    }, [id, singleCard])
    console.log(card)

    const addToBooked = () => {

        const addBooked = []

        const bookedItem = JSON.parse(localStorage.getItem('booked'))


        if (!bookedItem) {
            addBooked.push(card)
            localStorage.setItem('booked', JSON.stringify(addBooked))
            swal("Good job!", "You have successfully booked!", "success")
            
        }
        else {

            const isExist = bookedItem?.find(singleCard => singleCard.id === card.id)


            if (isExist) {
                swal("Sorry!", "You have already booked!", "error")
            }
            else {
                addBooked.push(...bookedItem, card)
                localStorage.setItem('booked', JSON.stringify(addBooked))
                swal("Good job!", "You have successfully booked!", "success")
                
            }


        }

    }

    return (
        <div className=" my-4">
            <div className="card w-3/4 mx-auto  bg-base-100 shadow-xl">
                <figure><img className="w-full h-[30vh] md:h-[60vh] lg:h-[80vh]" src={card?.them_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl lg:text-3xl font-bold font">{card?.EventType}</h2>
                    <h4 className="text-lg lg:text-xl font-semibold font4">{card?.event_title}</h4>
                    <p className="lg:text-lg text-gray-600 font5">{card?.Description}</p>
                    <div className="flex justify-between">
                        <p className="lg:text-xl font-medium font4">Price: {card?.price}</p>
                        <span className="lg:text-xl font-medium font4">Location: {card?.Location}</span>
                    </div>
                    <div className="card-actions">
                        <button onClick={addToBooked} className="btn bg-pink-500 text-white hover:bg-pink-700 w-full font4">Event Booking Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default EventCard;