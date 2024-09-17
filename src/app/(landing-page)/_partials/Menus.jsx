'use client';

import { Card } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import quran from '@/assets/images/quran.png';
import doa from '@/assets/svg/doa.svg';

const Menus = () => {
  return (
    <>
      <div className="w-full p-3 bg-[#121928] rounded-xl my-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center justify-end w-full ">
            <Link href={'/'}>
              <Card className="flex items-center justify-center w-28 h-28 bg-[#023B32] text-white">
                <Image
                  src={quran}
                  alt="Al-Quran"
                  className="size-20"
                />
                Al-Qur&apos;an
              </Card>
            </Link>
          </div>
          <div className="flex items-center justify-start">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
