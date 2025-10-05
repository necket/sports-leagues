import { BadgeOverview } from "../components/BadgeOverview"
import { LeaguesFilters } from "../components/LeaguesFilters"
import { LeaguesList } from "../components/LeaguesList"

export const Home = () => {
  return (
    <div>
      <h1>Sport Leagues</h1>
      <LeaguesFilters />
      <LeaguesList />
      <BadgeOverview />
    </div>
  )
}
