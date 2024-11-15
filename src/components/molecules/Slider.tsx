'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import Loader from '../atoms/Loader';
import Carousel from 'react-spring-3d-carousel';

type CardData = {
  name: string;
  role: string;
  experience: string;
  skills: string[];
};

const Slider: React.FC = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cards');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Map fetched data to cards for the carousel
  const cards = cardData.map((data, index) => ({
    key: index,
    content: <Card {...data} />,
    onClick: () => setGoToSlide(index),
  }));

  if (loading) {
    return <Loader color="white" />;
  }

  return (
    <div className="h-full px-16 text-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white py-1 px-2 rounded-md lg:mb-8 absolute lg:relative -top-[15rem] lg:top-0 inline-block mx-auto ">
        <span className="text-[#40E2E8] text-lg font-black flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 bg-[#BBF3D2] rounded-full">$</span> 월 100만원
        </span>
        <svg
          className="absolute -bottom-2"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370835 1.25C0.178386 0.916665 0.418948 0.499999 0.803848 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z"
            fill="white"
          />
        </svg>
      </motion.div>
      <Suspense fallback={<Loader color="white" />}>
        <Carousel slides={cards} goToSlide={goToSlide} offsetRadius={2} showNavigation={false} />
      </Suspense>
    </div>
  );
};

export default Slider;
