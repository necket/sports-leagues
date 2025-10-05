import React, { createContext, useState, useCallback, useContext, useMemo } from 'react';
import { useLeaguesQuery } from '../api/queries/useLeaguesQuery';
import type { League } from '../api/models';
import { getFilteredLeagues, getSports } from '../utils/utils';

export interface LeaguesContextValues {
  filteredLeagues: League[];
  isLeaguesLoading: boolean;
  isLeaguesError: boolean;
  query: string;
  sport: string | null;
  sports: string[];
  selectedLeagueId: string | null;
  handleQueryChange: (query: string) => void;
  handleSportChange: (sport: string | null) => void;
  handleLeagueSelect: (leagueId: string | null) => void;
}

const LeaguesContext = createContext<LeaguesContextValues>({
  filteredLeagues: [],
  isLeaguesLoading: false,
  isLeaguesError: false,
  query: "",
  sport: null,
  sports: [],
  selectedLeagueId: null,
  handleQueryChange: () => {},
  handleSportChange: () => {},
  handleLeagueSelect: () => {},
});

export interface LeaguesProviderProps {
  children: React.ReactNode;
}

export const LeaguesProvider = ({ children }: LeaguesProviderProps) => {
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);
  const [sport, setSport] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");

  const { data, isLoading, isError } = useLeaguesQuery();

  const sports = useMemo(() => getSports(data), [data]);

  const filteredLeagues = useMemo(
    () => getFilteredLeagues(data, query, sport), [data, query, sport]
  );

  // handlers
  const handleQueryChange = useCallback((query: string) => {
    setQuery(query);
  }, []);

  const handleSportChange = useCallback((sport: string | null) => {
    setSport(sport);
  }, []);

  const handleLeagueSelect = useCallback((leagueId: string | null) => {
    setSelectedLeagueId(leagueId);
  }, []);
  
  const value = useMemo(() => ({
    filteredLeagues: filteredLeagues,
    isLeaguesLoading: isLoading,
    isLeaguesError: isError,
    selectedLeagueId,
    query,
    sport,
    sports,
    handleQueryChange,
    handleSportChange,
    handleLeagueSelect,
  }), [
    filteredLeagues,
    selectedLeagueId,
    isLoading,
    isError,
    query,
    sport,
    sports,
    handleQueryChange,
    handleSportChange,
    handleLeagueSelect,
  ]);

  return (
    <LeaguesContext.Provider value={value}>
      {children}
    </LeaguesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLeaguesContext = () => useContext(LeaguesContext);

export const LeaguesConsumer = LeaguesContext.Consumer;
