/* eslint-disable react/prop-types */
import '../../index.css'
import { Link } from "react-router-dom";

const EventsCard = ({ eventdata }) => {
    const { id, EventType, card_img, price, Description } = eventdata
   

    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <div className="card h-[500px] bg-base-100 shadow-xl image-full">
                <figure><img src={card_img} /></figure>
                <div className="card-body">
                    <h2 className="mt-14 text-2xl font-bold font2">{EventType}</h2>
                    <p className=" text-lg font-semibold" >
                        {
                            Description.length > 200 ? <p>{Description.slice(0, 200)}
                                <br />
                                <button
                                    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    <Link to={`/eventCards/${id}`} className='font2'>Read More...</Link>
                                </button>
                            </p> :
                                <p>{Description}</p>
                        }
                    </p>
                    <p className="text-lg font-medium" >{price}</p>
                </div>
            </div>

        </div>
    );
};

export default EventsCard;