

const Bannar = () => {
    return (
        <div>
            <div className="carousel h-[50vh] md:h-[70vh] lg:h-[90vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.brides.com/thmb/cbMCgSKGIKFWcr6MIOBj52CWOqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CeliaMichael-118-fc49f52f07f64f1c9f1aafceab496dd2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://c4.wallpaperflare.com/wallpaper/241/116/966/candles-cake-cake-sweet-wallpaper-preview.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://m.media-amazon.com/images/I/811igjId-YL.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://m.media-amazon.com/images/I/712NU6kaIRL._SX522_.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src="https://m.media-amazon.com/images/I/71R0i7XEK9L._SL1500_.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;