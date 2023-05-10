import React from 'react';
import Image from 'next/image';

const Introduction = (): JSX.Element => {
  return (
    <div className="bg-banner bg-cover w-full h-screen">
      <h2
        id="about-us"
        className="text-4xl font-bold text-center py-20 underline underline-offset-4"
      >
        Qui Sommes Nous ?
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap justify-center items-center lg:w-2/3 h-1/2 m-4 border border-black shadow-2xl bg-gradient-to-r from-white to-pink-50">
          <Image src="/images/logo.png" alt="logo" width={200} height={200} />
          <h3 className="text-4xl font-semibold underline underline-offset-4">
            Gâteaux Maisons :
          </h3>
          <div className="flex flex-wrap justify-center items-center p-10">
            <h4 className="text-2xl mb-2 underline">
              10 ans d&apos;expérience
            </h4>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
