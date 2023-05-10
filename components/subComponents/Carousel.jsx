import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    const newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    const newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative px-5">
      <AiOutlineArrowLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-white hover:text-fuchsia-700 z-20 bg-fuchsia-700 rounded-full hover:bg-white "
      />
      <div className="w-full h-[80vh] flex overflow-hidden relative m-auto border border-4 border-fuchsia-700">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
          key={currentSlide + 1000}
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <>
                  <Image
                    image={image}
                    key={image.id}
                    src={image.image}
                    alt={image.description}
                    fill
                    className="animate-fadeIn object-cover"
                  />
                  <div
                    key={image.id + 10}
                    className="absolute backdrop-blur-lg bg-pink-200 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-4"
                  >
                    <h1
                      key={image.id + 20}
                      className="text-7xl text-fuchsia-700"
                    >
                      Pâtisserie
                    </h1>
                    <h2
                      key={image.id + 30}
                      className="text-3xl text-fuchsia-700 text-center"
                    >
                      Entre tradition et modernité
                    </h2>
                  </div>
                </>
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineArrowRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-white hover:text-fuchsia-700 z-20 bg-fuchsia-700 rounded-full hover:bg-white"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? 'h-4 w-4 bg-fuchsia-700 rounded-full mx-2 mb-2 cursor-pointer'
                  : 'h-4 w-4 bg-fuchsia-200 rounded-full mx-2 mb-2 cursor-pointer'
              }
              key={index + 100}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
