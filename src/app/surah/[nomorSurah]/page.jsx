'use client';

import Loading from '@/components/Loading';
import { IconButton } from '@material-tailwind/react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaPause, FaPlay } from 'react-icons/fa6';
import { LuDot } from 'react-icons/lu';

const DetailSurah = () => {
  const { nomorSurah } = useParams();
  const [surah, setSurah] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await axios.get(
          `https://equran.id/api/v2/surat/${nomorSurah}`
        );
        setSurah(response.data.data);
      } catch (error) {
        console.error('Error fetching surah', error);
      }
    };
    fetchSurah();
  }, [nomorSurah]);

  const handlePlayPause = (audioUrl) => {
    if (selectedAudio === audioUrl && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setSelectedAudio(audioUrl);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, selectedAudio]);

  const cleanDescription = (description) => {
    return description.replace(/<[^>]+>/g, ''); // Menghilangkan semua tag HTML
  };

  if (!surah)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white">
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
        <div className="text-3xl font-bold ">{surah.namaLatin}</div>
        <div>{surah.arti}</div>
        <div className="flex items-center gap-1 text-white">
          <span>{surah.tempatTurun}</span>
          <span>
            <LuDot size={25} />
          </span>
          <span>{surah.jumlahAyat} Ayat</span>
        </div>
        <div className="mt-10 text-justify lg:px-40">
          {cleanDescription(surah.deskripsi)}
        </div>
      </div>
      <div className="p-4">
        {surah.ayat &&
          surah.ayat.map((ayat) => (
            <div
              key={ayat.nomorAyat}
              className="my-10 text-justify text-white md:px-20"
            >
              <div className="text-4xl leading-[80px] text-end font-misbah">
                {ayat.teksArab}
              </div>
              <div className="mt-10 text-lg text-green-400">
                {ayat.teksLatin}
              </div>
              <h3 className="mt-6 mb-2 font-semibold">Artinya:</h3>
              <div className="text-lg ">&quot;{ayat.teksIndonesia}&quot;</div>

              {/* Audio Options */}
              <div className="mt-4">
                <button
                  onClick={() => handlePlayPause(ayat.audio['05'])}
                  className={` bg-transparent ${
                    isPlaying ? 'bg-blue-500' : 'bg-gray-500'
                  } rounded text-white`}
                >
                  {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                </button>
              </div>

              {/* Audio Player */}
              <audio
                ref={audioRef}
                src={selectedAudio}
                onEnded={() => setIsPlaying(false)}
              />
              <hr className="my-5" />
            </div>
          ))}
      </div>
    </>
  );
};

export default DetailSurah;
