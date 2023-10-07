/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from 'react-router-dom';
import '../../index.css'
import EventsCard from './EventsCard';


const Home = () => {
    const eventsCardData = useLoaderData()
    console.log(eventsCardData)
    return (
        <div>
            <div className=" bg-gray-400 h-[80vh]">
                {/* <div className="container ">

                    <div className="slide">


                        


                        <div className="item" style={{ backgroundImage: `url(${"https://c1.wallpaperflare.com/preview/1001/173/163/beach-beach-wedding-chairs-clouds.jpg"})` }}>
                            <div className="content">
                                <div className="name text-gray-600">Wedding</div>
                                <div className="des text-gray-800">Enchanted Garden Wedding</div>

                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url(${"https://c4.wallpaperflare.com/wallpaper/241/116/966/candles-cake-cake-sweet-wallpaper-preview.jpg"})` }}>
                            <div className="content">
                                <div className="name text-[#C40DA2]">Birthday Party</div>
                                <div className="des text-[#C40DA2]">Roaring Twenties Birthday Bash</div>

                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url(${"https://m.media-amazon.com/images/I/811igjId-YL.jpg"})` }}>
                            <div className="content">
                                <div className="name">Anniversary</div>
                                <div className="des">Golden Love Celebration</div>

                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url(${"https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg"})` }}>
                            <div className="content">
                                <div className="name">Engagement Party</div>
                                <div className="des">A Journey to Forever</div>

                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url(${"https://m.media-amazon.com/images/I/712NU6kaIRL._SX522_.jpg"})` }}>
                            <div className="content">
                                <div className="name text-gray-500">Retirement Party</div>
                                <div className="des text-gray-500">Cheers to New Beginnings</div>

                            </div>
                        </div>
                        <div className="item" style={{ backgroundImage: `url(${"https://m.media-amazon.com/images/I/71R0i7XEK9L._SL1500_.jpg"})` }}>
                            <div className="content">
                                <div className="name text-amber-600">Baby Shower</div>
                                <div className="des text-amber-600">Oh Baby, It's a Garden Party</div>

                            </div>
                        </div>

                    </div>

                    <div className="button">
                        <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>

                </div> */}

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-10'>
                {
                    eventsCardData?.map(eventdata => <EventsCard eventdata={eventdata} key={eventdata.id}></EventsCard>)
                }
                
            </div>


        </div>
    );
};

export default Home;