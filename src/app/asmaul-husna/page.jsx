'use client';

import { Card, IconButton } from '@material-tailwind/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const AsmaulHusnaPage = () => {
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const fetchAsmaulHusna = async () => {
      try {
        const response = await axios.get(
          'https://islamic-api-zhirrr.vercel.app/api/asmaulhusna'
        );
        setAsmaulHusna(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error');
      }
    };
    fetchAsmaulHusna();
  }, []);
  return (
    <>
      <div>
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
          <h1 className="text-2xl font-bold text-white">Asmaul Husna</h1>
        </section>
        <div className="grid grid-cols-3 gap-3 mb-5 lg:px-20">
          {asmaulHusna.map((husna, index) => (
            <Card
              key={index}
              className="p-3 text-white bg-gradient-to-r from-blue-900 to-blue-800"
            >
              <div className="flex items-center justify-center">
                <Card className="flex items-center justify-center text-white bg-green-800 border rounded-full size-8">
                  {husna.index}
                </Card>
              </div>
              <hr className="w-full mt-2 border border-white/50" />
              <div className="flex justify-between my-2">
                <span className="text-lg font-medium font-misbah">
                  {husna.arabic}
                </span>
                <span className="font-semibold">{husna.latin}</span>
              </div>
              <div className="mt-2 text-sm">{husna.translation_id}</div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default AsmaulHusnaPage;
