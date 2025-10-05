import { LeaguesSearchInput } from "./LeaguesSearchInput"
import { SportSelect } from "./SportSelect"

export const LeaguesFilters = () => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <LeaguesSearchInput />
      <SportSelect />
    </div>
  )
}
