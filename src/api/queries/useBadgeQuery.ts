import { queryOptions, useQuery } from "@tanstack/react-query";
import { API_BASE_URL, STALE_TIME_MS } from "../config";
import type { Badge } from "../models";

const fetchBadgeById = async (id: string): Promise<Badge[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/search_all_seasons.php?badge=1&id=${id}`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    return data.seasons;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const useBadgeQuery = (id: string, enabled: boolean) => {
  return useQuery<Badge[], Error, Badge[], string[]>(
    queryOptions({
      queryKey: ['badge', id],
      queryFn: () => fetchBadgeById(id),
      staleTime: STALE_TIME_MS,
      enabled,
    })
  );
}