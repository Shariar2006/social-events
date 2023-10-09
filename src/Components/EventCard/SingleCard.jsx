/* eslint-disable react/prop-types */

const SingleCard = ({card}) => {
    // const { id, EventType, card_img, price, Description } = card;
    console.log()


    return (
        <div>
            <p>{card?.EventType}</p>
        </div>
    );
};

export default SingleCard;