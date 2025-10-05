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
    if (isLoading) return <div className="text-neutral-100">Loading...</div>;
    if (isError) return <div className="text-neutral-100">Error loading badge</div>;

    const badgeUrl = getBadgeUrl(data);

    if (!badgeUrl) return <div className="text-neutral-100">No badge found</div>;

    return (
      <div className="w-full flex items-center justify-center">
        <img
          src={badgeUrl}
          alt="League badge"
          className="max-h-[80vh] max-w-[90vw] object-contain drop-shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div
      onClick={handleBadgeClick}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    >
      {renderContent()}
    </div>
  );
}
