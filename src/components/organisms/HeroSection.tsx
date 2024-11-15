'use client';
import React, { useState, useEffect } from 'react';
import Header from '../molecules/Header';
import CheckIcon from '../../assets/images/Checkbox.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SwiperSlider from '../molecules/SwiperSlider';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('../molecules/Slider'), {
  ssr: false,
});

type HeroSectionData = {
  title: string;
  description: string;
  stats: {
    label: string;
    detail: string;
  }[];
};

const HeroSection: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroSectionData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hero');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHeroData(data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(loading);
  return (
    <section className="w-full bg-cover bg-bottom h-dvh lg:h-auto" style={{ backgroundImage: "url('/hero-bg.png')" }}>
      <Header />

      <div className="container px-5 flex flex-col justify-between h-full md:flex-row py-10 lg:py-20">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-[#8BC4FF] lg:bg-white py-1 px-2 rounded-md mb-8 relative inline-block">
            <span className="text-white lg:text-[#40E2E8] text-lg font-black ">풀타임, 파트타임</span>
            <svg
              className="absolute -bottom-2 fill-current text-[#8BC4FF] lg:text-white"
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370835 1.25C0.178386 0.916665 0.418948 0.499999 0.803848 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-black text-white text-4xl lg:text-5xl mb-4 lg:mb-7 leading-[46px] lg:leading[62.4px]">
            {heroData?.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-black text-white text-lg lg:text-2xl mb-5">
            {heroData?.description}
          </motion.h2>

          <div className="hidden lg:flex gap-6 mt-10">
            {heroData?.stats.map((stat: { label: string; detail: string }, index: number) => (
              <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h4 className="border-t border-white text-lg text-white font-black py-3 inline-block">{stat.label}</h4>
                <p className="text-base text-[#FFFFFFCC] font-black">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 p-4">
          <Slider />
        </motion.div>
        <div className="lg:hidden">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex gap-3">
              <Image className="w-5 h-5" src={CheckIcon} alt="Icon" />
              <span className="text-base text-white font-black">한국어 능력</span>
            </div>
            <div className="flex gap-3">
              <Image className="w-5 h-5" src={CheckIcon} alt="Icon" />
              <span className="text-base text-white font-black">업무 수행 능력</span>
            </div>
            <div className="flex gap-3">
              <Image className="w-5 h-5" src={CheckIcon} alt="Icon" />
              <span className="text-base text-white font-black">겸업 여부</span>
            </div>
            <div className="flex gap-3">
              <Image className="w-5 h-5" src={CheckIcon} alt="Icon" />
              <span className="text-base text-white font-black">평판 조회</span>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-black text-[#FBFF23] text-base mb-5 underline">
            개발자가 필요하신가요?
          </motion.p>
        </div>
      </div>
      <div className="ml-16 2xl:ml-[16%] pb-20 hidden lg:block">
        <SwiperSlider />
      </div>
    </section>
  );
};
export default HeroSection;
