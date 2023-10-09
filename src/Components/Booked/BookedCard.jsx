/* eslint-disable react/prop-types */


const BookedCard = ({bookedCard}) => {
    const {  EventType, card_img, price, Description } = bookedCard || {}

    return (
        <div>
             <div className="card h-[500px] bg-base-100 shadow-xl image-full">
                <figure><img src={card_img} /></figure>
                <div className="card-body">
                    <h2 className="mt-14 text-2xl font-bold font5">{EventType}</h2>
                    <p className=" text-lg font-semibold font4" >
                        {
                            Description.length > 200 ? <p>{Description.slice(0, 200)}
                            </p> :
                                ''
                        }
                    </p>
                    <p className="text-lg font-medium" >{price}</p>
                </div>
            </div>
        </div>
    );
};

export default BookedCard;