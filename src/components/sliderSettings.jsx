import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react"
import "swiper/css";
import "./service.css";
import data from "../slider.json";
import { slidersettings } from "./sliderSettings";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper 
      spaceBetween={25}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
      {...slidersettings}>
          <SliderButtons />
          {data.map((i) => (
            <SwiperSlide key={i}>
              {/* <div className=" flexColStart s-card">
                                 <img src={i.image} alt="home"/>
    
                                 <span className='primaryText'>{i.name}</span>
                                 <span className='secondaryText'>{i.detail}</span>
                                 <button className="e-button">Enquiry Now</button>
                              </div> */}
            
              <div className="w-full p-4 xl:px-12 h-auto xl:py-10 gap-8 xl:gap-14 rounded-lg  flex flex-col  group hover:bg-gradient-to-b hover:from-[#4066ff] hover:[#2949c6] transition-colors duration-1000 s-card">
                <div className="w-full h-[60%] overflow-hidden rounded-lg">
                  <img
                    className="w-full h-90 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                    src={i.image}
                    alt="src"
                  />
                </div>
                <div className="w-full mt-5 flex flex-col  gap-8">
                  <div>
                  
                    
                    
                  </div>
                  <button className="e-button">Enquiry Now</button>
                </div>
              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Portfolio;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter s-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
