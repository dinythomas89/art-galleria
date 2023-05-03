import { create } from "zustand";
import { ArtistsData } from "../dataModel/artistData";

interface ArtistDataStore {
  artistsData: ArtistsData[];
  loading: boolean;
  error: boolean;
  fetchArtistsData: () => void;
}

export const useDataStore = create<ArtistDataStore>((set) => ({
  artistsData: [],
  loading: false,
  error: false,
  fetchArtistsData: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch("./artistsData.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      set((state) => ({
        artistsData: (state.artistsData = result),
        loading: false,
      }));
    } catch (err) {
      if (err instanceof Error) {
        set(() => ({ error: true, loading: false }));
      }
    }
  },
}));
