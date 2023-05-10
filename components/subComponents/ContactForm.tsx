import React from 'react';

const ContactForm = () => {
  return (
    <div className="border border-black rounded-sm w-3/4 lg:w-1/3 mb-8 p-2 shadow-2xl shadow-fuchsia-300 bg-slate-100">
      <h2 className="text-4xl font-bold text-center underline underline-offset-4 mb-8">
        Ecrivez-nous directement :
      </h2>

      <form
        action=""
        className="flex flex-col justify-center items-center gap-5"
      >
        <div className="flex flex-wrap justify-center items-start gap-5">
          <fieldset className="flex flex-col gap-5 h-full justify-start">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-500 rounded-sm"
            />
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-500 rounded-sm"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-5">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="border border-gray-500 rounded-sm"
            />
            <label htmlFor="subject">Sujet :</label>
            <select
              name="subject"
              id="subject"
              className="border border-gray-500 rounded-sm"
            >
              <option value="default">Choisissez un sujet</option>
              <option value="Entretien">Mariage</option>
              <option value="Reparation">Anniversaire</option>
              <option value="Reclamation">Cérémonie Religieuse</option>
              <option value="autre">Autre</option>
            </select>
          </fieldset>
        </div>
        <fieldset className="flex flex-col gap-5">
          <label htmlFor="message">Message :</label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="border border-gray-500 rounded-sm"
          ></textarea>
          <button className="border border-gray-500 rounded-sm bg-gray-200 hover:bg-blue-200">
            Envoyer
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
