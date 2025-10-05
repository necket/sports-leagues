import { useBadgeQuery } from "../api/queries/useBadgeQuery";
import { useLeaguesContext } from "../context/LeaguesProvider";
import { getBadgeUrl } from "../utils/utils";

export const BadgeOverview = () => {
  const { selectedLeagueId, handleLeagueSelect } = useLeaguesContext();
  const { data, isLoading, isError } = useBadgeQuery(selectedLeagueId ?? "", !!selectedLeagueId);

  if (!selectedLeagueId) return null;

  const handleBadgeClick = () => {
    handleLeagueSelect(null);
  }

  const renderContent = () => {
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading badge</div>;

    const badgeUrl = getBadgeUrl(data);

    if (!badgeUrl) return <div>No badge found</div>;

    return (
      <div>
        <img src={badgeUrl} />
      </div>
    );
  }

  return (
    // overlay
    <div onClick={handleBadgeClick}>
      {renderContent()}
    </div>
  );
}
