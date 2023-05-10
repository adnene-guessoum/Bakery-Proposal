import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

const ServicesCardFooter = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 pl-2">
      <h3 className="text-xl text-white underline underline-offset-4 pl-2">
        Services :
      </h3>
      <ul className="flex flex-col items-start justify-center gap-2">
        <li className="text-sm text-white">
          <a className="text-white flex" href="/services">
            <BiChevronRight size={16} />
            Test diagnostique
          </a>
        </li>
        <li className="text-sm text-white">
          <a className="text-white flex" href="/services">
            <BiChevronRight size={16} />
            Entretien moteur
          </a>
        </li>
        <li className="text-sm text-white">
          <a className="text-white flex" href="/services">
            <BiChevronRight size={16} />
            Changement Pneumatique
          </a>
        </li>
        <li className="text-sm text-white">
          <a className="text-white flex" href="/services">
            <BiChevronRight size={16} />
            Vidange huile
          </a>
        </li>
        <li className="text-sm text-white">
          <a className="text-white flex" href="/services">
            <BiChevronRight size={16} />
            Nettoyage
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ServicesCardFooter;
