'use client';

import ErrorState from '@/components/ErrorState';
import ReadingCard, { ReadingCardSkeleton } from '@/components/ReadingCard';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  LuArrowLeft,
  LuChevronLeft,
  LuChevronRight,
  LuPause,
  LuPlay,
} from 'react-icons/lu';

const QARI = '05'; // Misyari Rasyid Al-Afasi

const cleanDescription = (description) => description.replace(/<[^>]+>/g, '');

const AudioButton = ({ playing, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={playing ? `Jeda ${label}` : `Putar ${label}`}
    className={`flex items-center justify-center shrink-0 transition-colors rounded-full size-10 focus-ring ${
      playing
        ? 'bg-brand text-white dark:text-canvas'
        : 'bg-subtle text-muted hover:bg-brand-soft hover:text-brand'
    }`}
  >
    {playing ? <LuPause size={16} /> : <LuPlay size={16} className="ml-0.5" />}
  </button>
);

const DetailSurah = () => {
  const { nomorSurah } = useParams();
  const [surah, setSurah] = useState(null);
  const [error, setError] = useState(false);
  const [playingKey, setPlayingKey] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await axios.get(
          `https://equran.id/api/v2/surat/${nomorSurah}`
        );
        setSurah(response.data.data);
      } catch (error) {
        console.error('Error fetching surah', error);
        setError(true);
      }
    };
    fetchSurah();
  }, [nomorSurah]);

  // Satu elemen audio dipakai bersama untuk semua ayat & surah penuh
  const toggleAudio = (key, url) => {
    const audio = audioRef.current;
    if (playingKey === key) {
      audio.pause();
      setPlayingKey(null);
      return;
    }
    audio.src = url;
    audio.play();
    setPlayingKey(key);
  };

  const showBismillah = surah && surah.nomor !== 1 && surah.nomor !== 9;

  return (
    <div className="max-w-4xl pt-8 container-page md:pt-12">
      <Link
        href="/#surah"
        className="inline-flex items-center gap-2 px-1 py-1 -ml-1 text-sm font-medium transition-colors rounded-lg text-muted hover:text-brand focus-ring"
      >
        <LuArrowLeft size={16} />
        Daftar Surah
      </Link>

      {error ? (
        <div className="mt-6">
          <ErrorState />
        </div>
      ) : !surah ? (
        <>
          <div className="h-56 mt-6 skeleton rounded-3xl" />
          <div className="mt-8 space-y-4">
            {Array(3)
              .fill()
              .map((_, index) => (
                <ReadingCardSkeleton key={index} />
              ))}
          </div>
        </>
      ) : (
        <>
          {/* Info surah */}
          <section className="relative p-6 mt-6 overflow-hidden text-center border md:p-10 rounded-3xl border-brand/15 bg-gradient-to-br from-brand-soft to-surface">
            <p className="text-sm font-medium tracking-wide uppercase text-brand">
              Surah ke-{surah.nomor}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              {surah.namaLatin}
            </h1>
            <p
              dir="rtl"
              lang="ar"
              className="mt-2 text-3xl font-misbah text-brand"
            >
              {surah.nama}
            </p>
            <p className="mt-3 text-muted">
              {surah.arti} · {surah.tempatTurun} · {surah.jumlahAyat} ayat
            </p>

            <button
              type="button"
              onClick={() => toggleAudio('full', surah.audioFull[QARI])}
              className="inline-flex items-center gap-2 px-5 py-2.5 mt-6 text-sm font-semibold text-white transition rounded-full bg-brand hover:opacity-90 dark:text-canvas focus-ring"
            >
              {playingKey === 'full' ? (
                <LuPause size={16} />
              ) : (
                <LuPlay size={16} />
              )}
              {playingKey === 'full' ? 'Jeda murottal' : 'Putar satu surah'}
            </button>

            <details className="mx-auto mt-6 text-left group max-w-prose">
              <summary className="text-sm font-medium text-center cursor-pointer select-none text-muted hover:text-brand">
                Tentang surah ini
              </summary>
              <p className="mt-4 leading-relaxed text-ink/80">
                {cleanDescription(surah.deskripsi)}
              </p>
            </details>
          </section>

          {showBismillah && (
            <p
              dir="rtl"
              lang="ar"
              className="mt-10 text-3xl text-center font-misbah text-gold md:text-4xl"
            >
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          )}

          {/* Daftar ayat */}
          <div className="mt-8 space-y-4">
            {surah.ayat.map((ayat) => (
              <ReadingCard
                key={ayat.nomorAyat}
                number={ayat.nomorAyat}
                arabic={ayat.teksArab}
                latin={ayat.teksLatin}
                translation={ayat.teksIndonesia}
                actions={
                  <AudioButton
                    playing={playingKey === ayat.nomorAyat}
                    label={`ayat ${ayat.nomorAyat}`}
                    onClick={() =>
                      toggleAudio(ayat.nomorAyat, ayat.audio[QARI])
                    }
                  />
                }
              />
            ))}
          </div>

          {/* Navigasi surah */}
          <nav className="grid grid-cols-2 gap-3 mt-10">
            {surah.suratSebelumnya ? (
              <Link
                href={`/surah/${surah.suratSebelumnya.nomor}`}
                className="flex items-center gap-3 p-4 card card-hover focus-ring"
              >
                <LuChevronLeft
                  size={20}
                  className="shrink-0 text-muted"
                />
                <div className="min-w-0">
                  <div className="text-xs text-muted">Sebelumnya</div>
                  <div className="font-semibold truncate">
                    {surah.suratSebelumnya.namaLatin}
                  </div>
                </div>
              </Link>
            ) : (
              <span />
            )}
            {surah.suratSelanjutnya && (
              <Link
                href={`/surah/${surah.suratSelanjutnya.nomor}`}
                className="flex items-center justify-end gap-3 p-4 text-right card card-hover focus-ring"
              >
                <div className="min-w-0">
                  <div className="text-xs text-muted">Selanjutnya</div>
                  <div className="font-semibold truncate">
                    {surah.suratSelanjutnya.namaLatin}
                  </div>
                </div>
                <LuChevronRight
                  size={20}
                  className="shrink-0 text-muted"
                />
              </Link>
            )}
          </nav>
        </>
      )}

      <audio
        ref={audioRef}
        onEnded={() => setPlayingKey(null)}
      />
    </div>
  );
};

export default DetailSurah;
