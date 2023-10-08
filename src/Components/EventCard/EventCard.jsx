import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";


const EventCard = () => {
    const [card, setCard] = useState()

    const {id} = useParams()
    

    const singleCard = useLoaderData()
    // console.log(singleCard)

    useEffect(() => {
        const findCard = singleCard?.find(findCard => findCard.id == id)
        setCard(findCard)
    }, [id, singleCard])

    

    return (
        <div>
            
            <SingleCard card={card}></SingleCard>
        </div>
    );
};

export default EventCard;