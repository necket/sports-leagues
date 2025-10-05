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
    <div>
      <input type="text" placeholder="Search" value={value} onChange={handleInputChange} />
    </div>
  )
}