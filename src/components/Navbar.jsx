import Link from 'next/link';
import React from 'react';
import Search from './Search';
import { FaBookQuran } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-4 lg:px-20 py-8 text-white bg-[#121928]">
        <Link href={'/'}>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaBookQuran className="text-yellow-800" />
            E-Alqur&apos;an
          </div>
        </Link>
        <div>
          <Search placeholder={'Cari surah'} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
