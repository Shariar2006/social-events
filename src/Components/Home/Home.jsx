/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from 'react-router-dom';
import '../../index.css'
import EventsCard from './EventsCard';
import Bannar from './Bannar';


const Home = () => {

    const eventsCardData = useLoaderData()



    return (
        <div>

            <Bannar></Bannar>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-10'>
                {
                    eventsCardData?.map(eventdata => <EventsCard eventdata={eventdata} key={eventdata.id}></EventsCard>)
                }

            </div>

            '
            <div>

                <div className="hero min-h-[40vh] bg-base-200 mb-10">
                    <div className="hero-content ">

                        <div>
                            <p>OVER 20 YEARS HOSTING EVENTS</p>
                            <h1 className="text-5xl font-bold">Why choose us?</h1>
                            <p className="py-6">La Royale Banqueting Suites have been <br /> established for over 20 years, hosting thousands <br /> of weddings, birthday celebrations, Anniversary, Engagement <br /> Party, Retirement Party, Baby Shower <br /> and a variety of corporate events. </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;