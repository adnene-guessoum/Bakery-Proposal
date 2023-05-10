import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <>
      <h2
        id="testimonials"
        className="text-4xl font-bold text-center underline underline-offset-4 py-4"
      >
        Nos Clients :
      </h2>
      <div className="w-full h-screen flex flex-wrap gap-2 justify-center items-center">
        <div className="w-1/3 h-96 lg:w-1/4 gap-4 p-2 flex flex-col justify-center items-center border border-fuchsia-200 shadow-lg shadow-fuchsia-200">
          <Image
            src="/images/client/profile.png"
            alt="Client 1"
            width={100}
            height={100}
            className="avatar rounded-full"
          />
          <blockquote className="p-4">
            <div className="text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <footer className="text-center">
              <cite className="text-right font-semibold">- Client 1</cite>
            </footer>
          </blockquote>
        </div>

        <div className="w-1/3 h-96 lg:w-1/4 gap-4 p-2 flex flex-col justify-center items-center border border-fuchsia-200 shadow-lg shadow-fuchsia-200">
          <Image
            src="/images/client/profile.png"
            alt="Client 1"
            width={100}
            height={100}
            className="avatar rounded-full"
          />
          <blockquote className="p-4">
            <div className="text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <footer className="text-center">
              <cite className="text-right font-semibold">- Client 1</cite>
            </footer>
          </blockquote>
        </div>

        <div className="w-1/3 h-96 lg:w-1/4 gap-4 p-2 flex flex-col justify-center items-center border border-fuchsia-200 shadow-lg shadow-fuchsia-200">
          <Image
            src="/images/client/profile.png"
            alt="Client 1"
            width={100}
            height={100}
            className="avatar rounded-full"
          />
          <blockquote className="p-4">
            <div className="text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <footer className="text-center">
              <cite className="text-right font-semibold">- Client 1</cite>
            </footer>
          </blockquote>
        </div>

        <div className="w-1/3 h-96 lg:w-1/4 gap-4 p-2 flex flex-col justify-center items-center border border-fuchsia-200 shadow-lg shadow-fuchsia-200">
          <Image
            src="/images/client/profile.png"
            alt="Client 1"
            width={100}
            height={100}
            className="avatar rounded-full"
          />
          <blockquote className="p-4">
            <div className="text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <footer className="text-center">
              <cite className="text-right font-semibold">- Client 1</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
