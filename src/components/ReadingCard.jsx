const ReadingCard = ({ number, title, arabic, latin, translation, actions }) => {
  return (
    <article className="p-5 card md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center min-w-0 gap-3">
          {number !== undefined && (
            <span className="flex items-center justify-center text-sm font-semibold shrink-0 size-9 rounded-xl bg-brand-soft text-brand">
              {number}
            </span>
          )}
          {title && (
            <h2 className="text-lg font-semibold leading-snug md:text-xl">
              {title}
            </h2>
          )}
        </div>
        {actions}
      </div>

      <p
        dir="rtl"
        lang="ar"
        className="mt-6 arabic"
      >
        {arabic}
      </p>

      {latin && (
        <p className="mt-6 text-base italic leading-relaxed md:text-lg text-brand">
          {latin}
        </p>
      )}

      {translation && (
        <p className="pt-4 mt-4 text-base leading-relaxed border-t md:text-lg border-line text-ink/85">
          {translation}
        </p>
      )}
    </article>
  );
};

export const ReadingCardSkeleton = () => (
  <div className="p-5 card md:p-8">
    <div className="flex items-center gap-3">
      <div className="skeleton size-9 rounded-xl" />
      <div className="w-40 h-5 skeleton" />
    </div>
    <div className="w-3/4 h-8 mt-8 ml-auto skeleton" />
    <div className="w-1/2 h-8 mt-3 ml-auto skeleton" />
    <div className="w-2/3 h-4 mt-8 skeleton" />
    <div className="w-full h-4 mt-6 skeleton" />
  </div>
);

export default ReadingCard;
