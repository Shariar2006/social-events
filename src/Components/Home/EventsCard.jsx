/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const EventsCard = ({ eventdata }) => {
    const {id, EventType, card_img,price, Description, text_color} = eventdata
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        >

        <div className="h-[550px]">
            <div className="relative flex h-full flex-col rounded-xl bg-white bg-clip-border   shadow-md" 
            style={{ backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundImage: `url(${card_img})` }}>
                <div className="relative mx-4 -mt-6 h-56  ">
                    
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-2xl font-bold" style={{color:text_color}}>
                        {EventType}
                    </h5>
                    <p className=" text-xl font-semibold" style={{color:text_color}}>
                        {
                        Description.length > 200 ? <p>{Description.slice(0,200)}
                        <br />
                        <button
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        <Link to={`/eventdata/${id} ` }>Read More...</Link>
                    </button>
                         </p> :
                        <p>{Description}</p>
                        }
                    </p>
                    <p className="text-lg font-medium" style={{color:text_color}}>{price}</p>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default EventsCard;