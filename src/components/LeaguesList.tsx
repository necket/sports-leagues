import { useLeaguesContext } from "../context/LeaguesProvider";
import { LeagueItem } from "./LeagueItem";

export const LeaguesList = () => {
  const { filteredLeagues, isLeaguesLoading, isLeaguesError } = useLeaguesContext();

  if (isLeaguesLoading) return <div>Loading...</div>;
  if (isLeaguesError) return <div>Error loading leagues</div>;
  if (filteredLeagues.length === 0) return <div>No leagues found</div>;
  
  return (
    <div>
      {filteredLeagues.map((league) => (
        <LeagueItem key={league.idLeague} league={league} />
      ))}
    </div>
  )
}
