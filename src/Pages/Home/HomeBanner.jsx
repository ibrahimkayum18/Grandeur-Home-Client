import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-screen w-full "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/f0wHwXt/pexels-binyamin-mellish-106399.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
          >
            <div className="bg-[rgba(0,0,0,0.8)] w-full h-full flex items-center justify-start lg:pl-16 ">
              <div className="text-white text-left px-5">
                <div>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "We Provide Residential Real Estate Properties",
                      1000,
                      "We Provide Commercial Real Estate Properties",
                      1000,
                      "We Provide Industrial Real Estate Properties",
                      1000,
                      "We Provide Special Purpose Real Estate Properties",
                      1000,
                      
                    ]}
                    speed={50}
                    style={{ fontSize: "2em", fontWeight: "700", borderLeft: '15px solid #FF3611', paddingLeft: '10px'}}
                    repeat={Infinity}
                  />
                </div>
                <div>
                  <p className="w-[90%] py-5 font-medium">
                    Our agents set goals to help guide both the long- and short-term trajectory of their careers.  
                  </p>
                  <Link to={'/allProperties'}>
                    <button className="btn btn-primary">View The Properties</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen w-full"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/L6x8gpg/pexels-david-mcbee-1546168.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              overflow: "hidden",
            }}
          >
            <div className="bg-[rgba(0,0,0,0.6)] w-full h-full flex items-center justify-start lg:pl-16 ">
              <div className="text-white  px-5">
                <div>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "We Provide Residential Real Estate Properties",
                      1000,
                      "We Provide Commercial Real Estate Properties",
                      1000,
                      "We Provide Industrial Real Estate Properties",
                      1000,
                      "We Provide Special Purpose Real Estate Properties",
                      1000,
                    ]}
                    speed={50}
                    style={{ fontSize: "2em",height:'60px', fontWeight: "700", borderLeft: '15px solid #FF3611', paddingLeft: '10px' }}
                    repeat={Infinity}
                  />
                </div>
                <div className="text-center lg:text-left">
                  <p className="w-[90%] lg:w-1/2 py-5 font-medium">
                    Our agents set goals to help guide both the long- and short-term trajectory of their careers.  
                  </p>
                  <Link to={'/allProperties'}>
                    <button className="btn btn-primary">View The Properties</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;