import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Dlc from "./Dlc"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        800:{slidesPerView:2},
        1400:{slidesPerView:3}
    }}
    >
        <SwiperSlide>
            <Dlc 
                src="/images/dlcst.png"
                alt="Image DLC Stranger Things"
                contents={[
                    "New killer: Demogorgon",
                    "New survivor: Steve and Nancy",
                    "An exclusive item for Nancy and Steve"
                ]}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Dlc 
                src="/images/dlcsaw.png"
                alt="Image DLC Saw"
                contents={[
                    "New killer: Pig",
                    "New survivor: Detective Tapp",
                    "An exclusive item for Detective Tapp"
                ]}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Dlc 
                src="/images/dlchalloween.png"
                alt="Image DLC Halloween 13"
                contents={[
                    "New killer: Myers",
                    "New survivor: Laurie Strode",
                    "An exclusive item for Laurie Strode"
                ]}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Dlc 
                src="/images/dlcdoomed.webp"
                alt="Image DLC Doomed"
                contents={[
                    "New killer: The HoundMaster",
                    "New survivor: Taurie Cain",
                    "An exclusive item for Taurie Cain"
                ]}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Dlc 
                src="/images/dlcd&d.webp"
                alt="Image DLC Dungeon & Dragons"
                contents={[
                    "New killer: Vecna",
                    "New survivor: Aestri Yazar",
                    "An exclusive item for Aestri Yazar"
                ]}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Dlc 
                src="/images/dlccastle.webp"
                alt="Image DLC CastleVania"
                contents={[
                    "New killer: Dracula",
                    "New survivor: Trevor Belmont",
                    "An exclusive item for Trevor Belmont"
                ]}
            />
        </SwiperSlide>
    </Swiper>
  );
};


