'use client';

import { Card } from '@material-tailwind/react';
import React from 'react';

const Quran = () => {
  return (
    <>
      <Card className="flex flex-row w-full gap-5 p-5 bg-black">
        <div className="flex items-center justify-center text-lg rotate-45 bg-gray-800 rounded-lg size-10">
          <span className="font-bold text-white -rotate-45">1</span>
        </div>
        <div className="flex flex-col text-white">
          <div className="flex justify-between w-full">
            <div>Al-Fatihah</div>
            <div>Al-Fatihah</div>
          </div>
          <div className="flex justify-between flex-grow w-full">
            <div>Pembukaan</div>
            <div>7 ayat</div>
          </div>
        </div>
      </Card>
      <Card className="w-full p-2 bg-black">dada</Card>
      <Card className="w-full p-2 bg-black">dada</Card>
    </>
  );
};

export default Quran;
