const Loading = ({ label = 'Memuat...' }) => {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-3 text-sm text-muted"
    >
      <span className="border-2 rounded-full size-8 border-line border-t-brand animate-spin" />
      {label}
    </div>
  );
};

export default Loading;
