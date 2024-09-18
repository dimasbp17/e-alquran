import React from 'react';
import Menus from './_partials/Menus';
import Quran from './_partials/Quran';

const AlQuranHome = () => {
  return (
    <>
      <div className="px-4 md:px-20">
        <section>
          <Menus />
        </section>
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Quran />
        </section>
      </div>
    </>
  );
};

export default AlQuranHome;
