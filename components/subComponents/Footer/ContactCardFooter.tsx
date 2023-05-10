import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactCardFooter = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 pl-2">
      <h3 className="text-xl text-white underline underline-offset-4">
        Adresse :
      </h3>
      <div className="flex flex-wrap items-start gap-2">
        <FaPhoneAlt className="text-3xl text-white" />
        <p className="text-sm text-white">+213 555 555 555</p>
      </div>

      <div className="flex flex-wrap items-start gap-2">
        <FaEnvelope className="text-3xl text-white" />
        <p className="text-sm text-white">cakeShop@email.com</p>
      </div>

      <div className="flex flex-wrap items-start gap-2">
        <FaMapMarkerAlt className="text-3xl text-white" />
        <p className="text-sm text-white">Orly</p>
      </div>
    </div>
  );
};

export default ContactCardFooter;
