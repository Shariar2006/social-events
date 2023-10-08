import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleEventCard from "./SingleEventCard";

const EventCard = () => {
    const [eventData, setEventData] = useState()

    const {id} = useParams()

    const eventSingleCard = useLoaderData()

    useEffect(() => {
        const findCard = eventSingleCard?.find(findCard => findCard.id == id)
        setEventData(findCard)
    },[])

    return (
        <div>
            <SingleEventCard eventData={eventData}></SingleEventCard>
        </div>
    );
};

export default EventCard;