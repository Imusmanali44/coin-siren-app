import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import IconBox from '../../assets/svgs/icon-box.svg';
import IconImage from '../../assets/svgs/icon-image.svg';
import IconMarketing from '../../assets/svgs/icon-marketing.svg';
import IconTarget from '../../assets/svgs/icon-target.svg';
import IconCall from '../../assets/svgs/icon-call.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const slideData = [
  { icon: IconMarketing, text: '해외 마케팅' },
  { icon: IconImage, text: '퍼블리셔' },
  { icon: IconBox, text: '캐드원(제도사)' },
  { icon: IconTarget, text: '해외 세일즈' },
  { icon: IconCall, text: '해외 CS' },
  { icon: IconMarketing, text: '해외 마케팅' },
  { icon: IconImage, text: '퍼블리셔' },
  { icon: IconBox, text: '캐드원(제도사)' },
  { icon: IconTarget, text: '해외 세일즈' },
  { icon: IconCall, text: '해외 CS' },
];

const SwiperSlider: React.FC = () => {
  return (
    <Swiper
      slidesPerView={5}
      centeredSlides={false}
      spaceBetween={10}
      slidesPerGroupSkip={1}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
        1320: {
          slidesPerView: 5,
          slidesPerGroup: 2,
        },
      }}
      scrollbar={true}
      navigation={true}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      className="mySwiper">
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[#FFFFFF33] rounded-lg p-4 flex items-center gap-3">
            <div className="bg-[#FFFFFF66] rounded-lg flex items-center justify-center w-14 h-14">
              <Image src={slide.icon} alt="icon" priority />
            </div>
            <p className="text-2xl text-white font-black">{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
