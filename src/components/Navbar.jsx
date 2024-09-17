import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-20 py-8 text-white bg-[#121928]">
        <Link href={'/'}>
          <div className="text-2xl font-bold">E-Alqur&apos;an</div>
        </Link>
        <div>Search</div>
      </div>
    </>
  );
};

export default Navbar;
