import { useLeaguesContext } from "../context/LeaguesProvider";

const ALL_SPORTS_VALUE = "All Sports";

export const SportSelect = () => {
  const { handleSportChange, sport, sports } = useLeaguesContext();

  const handleSelectChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    handleSportChange(value === ALL_SPORTS_VALUE ? null : value);
  }

  return (
    <div>
      <select value={sport ?? ALL_SPORTS_VALUE} onChange={handleSelectChange}>
        <option value={ALL_SPORTS_VALUE}>All Sports</option>
        {sports.map((sport) => (
          <option key={sport} value={sport}>{sport}</option>
        ))}
      </select>
    </div>
  )
}