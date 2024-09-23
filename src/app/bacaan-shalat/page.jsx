'use client';

import { IconButton } from '@material-tailwind/react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import BacaanShalat from './_partials/BacaanShalat';
import NiatShalat from './_partials/NiatShalat';

const BacaanShalatPage = () => {
  // const [bacaanShalat, setBacaanShalat] = useState([]);
  // useEffect(() => {
  //   const fetchBacaanShalat = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://islamic-api-zhirrr.vercel.app/api/bacaanshalat'
  //       );
  //       setBacaanShalat(response.data);
  //     } catch (error) {
  //       console.error('Error fetching bacaan', error);
  //     }
  //   };
  //   fetchBacaanShalat();
  // }, []);
  const data = [
    {
      label: 'Niat Shalat',
      value: 'html',
      desc: <NiatShalat />,
    },
    {
      label: 'Bacaan Shalat',
      value: 'react',
      desc: <BacaanShalat />,
    },
  ];
  return (
    <>
      <section className="flex items-center justify-between w-full px-40 py-10 bg-[#1E2836]">
        <div className="flex items-center gap-2">
          <Link href={'/'}>
            <IconButton className="rounded-full">
              <FaArrowLeft />
            </IconButton>
          </Link>
          <span className="font-semibold text-white">Beranda</span>
        </div>
      </section>
      <div className="flex items-center justify-center my-10 md:px-20">
        {/* {bacaanShalat.map((bacaan) => (
          <div
            key={bacaan.id}
            className="my-10 text-justify text-white md:px-20"
          >
            <div className="text-2xl font-bold">
              {bacaan.id}. {bacaan.name}
            </div>
            <div className="text-4xl leading-[80px] text-end font-misbah">
              {bacaan.arabic}
            </div>

            <div className="mt-10 text-lg text-green-400">{bacaan.latin}</div>

            <div className="mt-6 text-lg">{bacaan.terjemahan}</div>

            <hr className="my-5" />
          </div>
        ))} */}
        <div className="">
          <Tabs value="html">
            <TabsHeader className="bg-green-400">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className=""
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel
                  key={value}
                  value={value}
                >
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default BacaanShalatPage;
