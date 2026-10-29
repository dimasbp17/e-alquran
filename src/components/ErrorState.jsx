'use client';

const ErrorState = ({
  message = 'Data gagal dimuat. Periksa koneksi internet lalu coba lagi.',
}) => {
  return (
    <div className="px-6 py-12 text-center card">
      <p className="text-muted">{message}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="px-5 py-2.5 mt-4 text-sm font-semibold text-white rounded-full bg-brand hover:opacity-90 dark:text-canvas focus-ring"
      >
        Muat ulang
      </button>
    </div>
  );
};

export default ErrorState;
