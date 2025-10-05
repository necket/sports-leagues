import type { Badge, League } from "../api/models";

export const getSports = (data?: League[]): string[] => {
  if (!data) return [];

  const sports: Record<string, true> = {};
  for (const { strSport } of data) {
    if (strSport) sports[strSport] = true;
  }

  return Object.keys(sports);
}

export const getFilteredLeagues = (data?: League[], query?: string, sport?: string | null): League[] => {
  if (!data) return [];

  const normalizedQuery = query?.toLowerCase().trim() ?? "";
  if (!normalizedQuery && !sport) return data;

  return data.filter(({ strLeague, strSport }) => {
    return strLeague.toLowerCase().includes(normalizedQuery) && (!sport || strSport === sport);
  });
}

export const getBadgeUrl = (badges?: Badge[]) => {
  if (!badges) return null;

  for (const badge of badges) {
    if (badge.strBadge) return badge.strBadge;
  }

  return null;
}