'use client';

import { Card } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import menu from './menu';

const Menus = () => {
  return (
    <>
      <div className="w-full p-3 bg-[#121928] rounded-xl my-5 border border-white">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {menu.map((menu, index) => (
            <Link
              href={menu.href}
              className="w-full"
              key={index}
            >
              <Card className="flex items-center justify-center w-full h-28 bg-gradient-to-r from-[#16423C] to-[#0D7C66] text-white font-semibold">
                <Image
                  src={menu.image}
                  alt="Al-Quran"
                  className="size-16"
                  width={1024}
                  height={1024}
                />
                {menu.title}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menus;
