'use client';

import { IconButton } from '@material-tailwind/react';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import BacaanShalat from './_partials/BacaanShalat';
import NiatShalat from './_partials/NiatShalat';
import { useRouter } from 'next/navigation';

const BacaanShalatPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className="flex items-center justify-between w-full px-4 md:px-20">
        <div className="flex items-center gap-2 my-10">
          <IconButton
            className="bg-yellow-800 rounded-full"
            onClick={() => router.back()}
          >
            <FaArrowLeft />
          </IconButton>
          <span className="font-semibold text-white">Beranda</span>
        </div>
      </section>

      <div className="px-4 lg:px-20">
        <div className="flex mb-10 text-lg font-bold">
          <button
            className={`py-1 ${
              activeTab === 1
                ? 'border-b-2 border-yellow-600 text-yellow-600'
                : 'text-white'
            }`}
            onClick={() => handleTabClick(1)}
          >
            Niat Shalat
          </button>
          <button
            className={`py-1 mx-5 ${
              activeTab === 2
                ? 'border-b-2 border-yellow-600 text-yellow-600'
                : 'text-white'
            }`}
            onClick={() => handleTabClick(2)}
          >
            Bacaan Shalat
          </button>
        </div>

        {/* Tab Content */}
        <div className="">
          {activeTab === 1 && <NiatShalat />}

          {activeTab === 2 && <BacaanShalat />}
        </div>
      </div>
    </>
  );
};

export default BacaanShalatPage;
