import { queryOptions, useQuery } from "@tanstack/react-query";
import { API_BASE_URL, STALE_TIME_MS } from "../config";
import type { League } from "../models";

const fetchAllLeagues = async (): Promise<League[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/all_leagues.php`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    return data.leagues;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const useLeaguesQuery = () => {
  return useQuery<League[], Error, League[], string[]>(
    queryOptions({
      queryKey: ['leagues'],
      queryFn: fetchAllLeagues,
      staleTime: STALE_TIME_MS,
    })
  );
}
