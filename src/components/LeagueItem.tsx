import type { League } from "../api/models";
import { useLeaguesContext } from "../context/LeaguesProvider";

interface LeagueItemProps {
  league: League;
}

export const LeagueItem = ({ league }: LeagueItemProps) => {
  const { handleLeagueSelect } = useLeaguesContext();

  return (
    <div onClick={() => handleLeagueSelect(league.idLeague)}>
      <div>{league.strLeague}</div>
      <div>{league.strLeagueAlternate}</div>
      <div>{league.strSport}</div>
    </div>
  )
}