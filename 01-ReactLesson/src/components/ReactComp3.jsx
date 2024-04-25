import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import pythonBan from ".././assets/pythonBanner.jpeg";
import reactBan from ".././assets/reactBanner.jpeg";
import javaBan from ".././assets/javaBanner.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { Pagination, Navigation, EffectCoverflow } from "swiper";

import Card from "./Card";

function ReactComp3({ children }) {
  console.log("Children prop", children);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="head-wrap">
                <h3>Children Prop Practice</h3>
              </div>
            </div>
            <div className="col-12">
              <h3>Swiper JS Slider</h3>
              <div className="swiper-wrap">
                <Swiper
                  // modules={[Navigation, Pagination]}
                  effect={"coverflow"}
                  spaceBetween={30}
                  slidesPerView={1}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img
                      src="https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      style={{ width: "800px", height: "auto" }}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="https://images.pexels.com/photos/7333126/pexels-photo-7333126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      style={{ width: "800px", height: "auto" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://images.pexels.com/photos/768009/pexels-photo-768009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      style={{ width: "800px", height: "auto" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://images.pexels.com/photos/1125122/pexels-photo-1125122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      style={{ width: "800px", height: "auto" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://images.pexels.com/photos/2858083/pexels-photo-2858083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      style={{ width: "800px", height: "auto" }}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      style={{ width: "800px", height: "auto" }}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src=" https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      style={{ width: "800px", height: "auto" }}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReactComp3;
