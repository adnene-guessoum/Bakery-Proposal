import React from 'react';
import ContactForm from './subComponents/ContactForm';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full bg-fuchsia-100">
      <h2
        id="contact"
        className="text-5xl font-bold text-center py-4 underline underline-offset-4"
      >
        Contact
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-20 p-4">
        <div className="flex flex-col justify-center items-center border shadow-2xl shadow-fuchsia-300 p-4 border border-black bg-slate-100 w-3/4 lg:w-1/3">
          <h2 className="text-4xl font-bold text-center underline underline-offset-4 p-4">
            Horaires
          </h2>
          <p className="text-center">Lundi : 8h - 12h / 14h - 18h</p>
          <p className="text-center">Mardi : 8h - 12h / 14h - 18h</p>
          <p className="text-center">Mercredi : 8h - 12h / 14h - 18h</p>
          <p className="text-center">Jeudi : 8h - 12h / 14h - 18h</p>
          <p className="text-center">Vendredi : 8h - 12h / 14h - 18h</p>
          <p className="text-center">Samedi : 8h - 12h / 14h - 18h</p>
          <p className="text-center">Dimanche : Fermé</p>
        </div>
        <div className="flex flex-col justify-around items-center border shadow-2xl shadow-fuchsia-300 p-4 border border-black bg-slate-100 w-3/4 lg:w-1/3">
          <p className="text-center">
            Vous pouvez nous contacter par téléphone au 01 23 45 67 89 <br /> ou
            par email à l&apos;adresse suivante :{' '}
            <a
              href="mailto:
						cakeshop@mail.com"
              className="text-blue-500"
            >
              cakeshop@mail.com
            </a>
          </p>

          <h2 className="text-4xl font-bold text-center underline underline-offset-4 my-4">
            Adresse :
          </h2>
          <div className="text-center mb-10">1 rue de la paix, 75000 Paris</div>

          <h2 className="text-4xl font-bold text-center underline underline-offset-4 my-4">
            Accès :
          </h2>
          <p className="text-center">Métro : Ligne 1</p>
          <p className="text-center">Bus : Ligne 1</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
