import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiCake } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-rose-300 shadow-lg shadow-rose-100 mb-10">
      <nav className="flex items-center justify-around w-full px-8 py-4 bg-white">
        <Link href="/" className="flex items-center justify-between">
          <h1 className="text-5xl font-bold flex items-center justify-between mt-6 text-fuchsia-500">
            <HiCake className="mr-8 ml-2 text-fuchsia-500" />
            CakeShop
          </h1>
        </Link>
        <button
          className="flex items-center justify-center w-10 h-10 text-2xl text-white bg-fuchsia-500 rounded-full lg:hidden"
          onClick={handleClick}
        >
          <GiHamburgerMenu />
        </button>

        {isMenuOpen && (
          <div className="absolute z-50 w-52 h-5/8 bg-white top-24 mr-2 right-0 border border-fuchsia-700">
            <ul className="flex flex-col items-start justify-between text-xl py-4 pl-2 gap-10 z-50">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="#services">Nos Créations</Link>
              </li>
              <li>
                <Link href="#about-us">Qui Sommes Nous ?</Link>
              </li>
              <li>
                <Link href="#testimonials">Nos Clients</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}

        <ul className="hidden lg:flex items-center justify-between space-x-4">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="#services">Nos Créations</Link>
          </li>
          <li>
            <Link href="#about-us">Qui Sommes Nous ?</Link>
          </li>
          <li>
            <Link href="#testimonials">Nos Clients</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
