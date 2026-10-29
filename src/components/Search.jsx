import { LuSearch } from 'react-icons/lu';

const Search = ({ placeholder, value, onChange, className = '' }) => {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">{placeholder}</span>
      <LuSearch
        size={18}
        className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2 text-muted"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 pr-4 text-base transition border outline-none pl-11 rounded-xl bg-surface border-line placeholder:text-muted/80 focus:border-brand focus:ring-4 focus:ring-brand/10"
      />
    </label>
  );
};

export default Search;
