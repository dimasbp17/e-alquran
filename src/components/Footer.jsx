const Footer = () => {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="flex flex-col items-center justify-between gap-2 py-8 text-sm text-center container-page sm:flex-row sm:text-left text-muted">
        <span>
          <span className="font-semibold text-ink">E-Alqur&apos;an</span> ·
          Baca, dengar, dan pahami.
        </span>
        <span>
          Sumber data:{' '}
          <a
            href="https://equran.id"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-brand"
          >
            equran.id
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
