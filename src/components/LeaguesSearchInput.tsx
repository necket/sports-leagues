import { useEffect, useState } from "react";
import { useLeaguesContext } from "../context/LeaguesProvider";

const DEBOUNCE_DELAY = 500;

export const LeaguesSearchInput = () => {
  const { handleQueryChange, query } = useLeaguesContext();
  const [value, setValue] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleQueryChange(value);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search leagues..."
        value={value}
        onChange={handleInputChange}
        className="w-full h-10 rounded-md bg-neutral-900 border border-neutral-800 px-3 text-sm text-neutral-100 placeholder:text-neutral-500 outline-none focus-visible:ring-2 focus-visible:ring-neutral-700"
      />
    </div>
  )
}