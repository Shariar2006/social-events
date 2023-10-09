import { useEffect, useState } from "react"
import BookedCard from "./BookedCard"

const BookedEvent = () => {

    const [booked, setbooked] = useState([])

    const [noFound, setNoFound] = useState(false)

    useEffect(() => {
        const bookedItem = JSON.parse(localStorage.getItem('booked'))

        if (bookedItem) {
            setbooked(bookedItem)
        }
        else {
            setNoFound("You did not booked!")
        }


    }, [])

    return (
        <div>
            {
                noFound ? <p className='h-[80vh] flex justify-center items-center text-2xl font-bold'>{noFound}</p>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-10">
                        {
                            booked.map(bookedCard => <BookedCard key={bookedCard.id} bookedCard={bookedCard}></BookedCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default BookedEvent;