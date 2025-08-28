// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full max-w-[1300px] mx-auto py-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Pagination]}
        className="rounded-xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src={slider1}
            alt="Slide 1"
            className="h-80 w-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt="Slide 2"
            className="h-80 w-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            alt="Slide 3"
            className="h-80 w-full object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination Styling */}
      <style>
        {`
          .swiper-pagination-bullet {
            background: #d1d5db; /* gray-300 */
            opacity: 1;
            width: 12px;
            height: 12px;
          }
          .swiper-pagination-bullet-active {
            background: #22c55e; /* green-500 */
            width: 14px;
            height: 14px;
          }
        `}
      </style>
    </div>
  );
}
