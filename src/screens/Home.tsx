import { BadgeOverview } from "../components/BadgeOverview"
import { LeaguesFilters } from "../components/LeaguesFilters"
import { LeaguesList } from "../components/LeaguesList"

export const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-4 py-8">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">Sport Leagues</h1>
      <LeaguesFilters />
      <LeaguesList />
      <BadgeOverview />
    </div>
  )
}
