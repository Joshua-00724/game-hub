import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;

}
interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
  }

  const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({gameQuery:{searchText}})),
    setGenreId: (genreId) => set(game => ({gameQuery: {...game.gameQuery,genreId}})),
    setPlatformId: (platformId) => set(game => ({gameQuery: {...game.gameQuery, platformId}})),
    setSortOrder:  (sortOrder) => set(game => ({gameQuery: {...game.gameQuery, sortOrder}}))
}) )

export default useGameQueryStore;