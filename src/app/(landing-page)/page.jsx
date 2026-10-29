import Menus from './_partials/Menus';
import Quran from './_partials/Quran';

const AlQuranHome = () => {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-soft/70 to-canvas" />
        <div className="py-14 md:py-20 container-page">
          <p
            dir="rtl"
            lang="ar"
            className="text-2xl font-misbah text-gold md:text-3xl"
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <h1 className="max-w-2xl mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl text-balance">
            Baca, dengar, dan pahami Al-Qur&apos;an setiap hari.
          </h1>
          <p className="max-w-xl mt-4 text-base leading-relaxed md:text-lg text-muted">
            114 surah lengkap dengan terjemahan dan murottal, ditambah doa
            harian, bacaan shalat, dan Asmaul Husna.
          </p>
        </div>
      </section>

      <section className="py-10 container-page">
        <Menus />
      </section>

      <section
        id="surah"
        className="scroll-mt-28 container-page"
      >
        <Quran />
      </section>
    </>
  );
};

export default AlQuranHome;
