import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Welcome = (props) => {
    return <h1 className="mb-4">Welcome <b>{props.name}</b></h1>;
};
const Home = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <Welcome name="Krunal" />

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>

                    <div className="contact__form mt-5 bg-white">
                        <h2 className="mb-3">Let's Connect</h2>
                        <form id="contactform" method="post">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" name="company" className="form-control" placeholder="Your Company Name" />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" required="" placeholder="Your Full Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" required="" placeholder="Enter Your E-Mail Address" />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" name="mobile" className="form-control" required="" placeholder="Enter Your Contact Number" />
                            </div>
                            <div className="form-group mt-5 mb-0">
                                <button type="submit" className="btn btn-primary btn-block">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home