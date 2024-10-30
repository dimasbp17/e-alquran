'use client';

import { Card } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import menu from './menu';

const Menus = () => {
  return (
    <>
      <div className="w-full p-3 bg-[#121928] rounded-xl my-5 border border-white">
        <div className="grid grid-cols-4 gap-5">
          {menu.map((menu, index) => (
            <Link
              href={menu.href}
              className="w-full"
              key={index}
            >
              <Card className="flex items-center justify-center w-full h-28 bg-[#16423C] text-white">
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

          {/* <div className="flex items-center justify-start">
            <Link href={'/doa-harian'}>
              <Card className="flex items-center justify-center w-28 h-28 bg-[#023B32] text-white">
                <Image
                  src={doa}
                  alt="Al-Quran"
                  className="size-16"
                />
                Doa
              </Card>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Menus;
