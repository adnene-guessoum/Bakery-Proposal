import React from 'react';

const OppeningsCardFooter = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 pl-2">
      <h3 className="text-xl text-white self-center underline underline-offset-4 pr-2">
        Heures d&apos;ouvertures :
      </h3>
      <ul className="flex flex-col items-start justify-between gap-4">
        <li className="text-sm text-white">Lundi - Vendredi : 8h - 18h</li>
        <li className="text-sm text-white">Samedi : 8h - 12h</li>
        <li className="text-sm text-white">Dimanche : Fermé</li>
      </ul>
    </div>
  );
};

export default OppeningsCardFooter;
