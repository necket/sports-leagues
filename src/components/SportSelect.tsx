import { useLeaguesContext } from "../context/LeaguesProvider";

const ALL_SPORTS_VALUE = "All Sports";

export const SportSelect = () => {
  const { handleSportChange, sport, sports } = useLeaguesContext();

  const handleSelectChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    handleSportChange(value === ALL_SPORTS_VALUE ? null : value);
  }

  return (
    <div className="sm:w-60">
      <select
        value={sport ?? ALL_SPORTS_VALUE}
        onChange={handleSelectChange}
        className="w-full h-10 rounded-md bg-neutral-900 border border-neutral-800 px-3 text-sm text-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-neutral-700"
      >
        <option value={ALL_SPORTS_VALUE}>All Sports</option>
        {sports.map((sport) => (
          <option key={sport} value={sport}>{sport}</option>
        ))}
      </select>
    </div>
  )
}