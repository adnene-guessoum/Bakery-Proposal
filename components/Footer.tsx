import React from 'react';
import Link from 'next/link';
import ContactCardFooter from './subComponents/Footer/ContactCardFooter';
import ServicesCardFooter from './subComponents/Footer/ServicesCardFooter';
import OppeningsCardFooter from './subComponents/Footer/OppeningsCardFooter';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-800 sticky top-[100vh] flex justify-center p-4">
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-row flex-wrap gap-16 justify-around border">
          <ContactCardFooter />
          <ServicesCardFooter />
          <OppeningsCardFooter />
        </div>

        <div className="flex flex-col items-center justify-between md:flex-row gap-4">
          <p className="text-sm text-white">
            © 2021{' '}
            <Link href="/" className="text-white hover:text-gray-300">
              Au bon gâteau
            </Link>
            . All Rights Reserved.
          </p>

          <p className="text-sm text-white">
            Designed by{' '}
            <a
              href="https://adnene-dev.vercel.app/"
              className="text-white hover:text-gray-300"
              target="_blank"
            >
              Adnene Guessoum
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
