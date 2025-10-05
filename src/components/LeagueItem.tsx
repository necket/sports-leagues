import type { League } from "../api/models";
import { useLeaguesContext } from "../context/LeaguesProvider";

interface LeagueItemProps {
  league: League;
}

export const LeagueItem = ({ league }: LeagueItemProps) => {
  const { handleLeagueSelect } = useLeaguesContext();

  return (
    <div
      onClick={() => handleLeagueSelect(league.idLeague)}
      className="group cursor-pointer rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-colors hover:bg-neutral-850/60"
    >
      <div className="flex items-baseline justify-between gap-2">
        <div className="text-sm font-medium text-neutral-300">{league.strSport}</div>
      </div>
      <div className="mt-2 text-lg font-semibold text-neutral-100 group-hover:text-white">
        {league.strLeague}
      </div>
      {league.strLeagueAlternate && (
        <div className="mt-1 text-sm text-neutral-400">{league.strLeagueAlternate}</div>
      )}
    </div>
  )
}