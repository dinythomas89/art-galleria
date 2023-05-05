export interface WorksData {
  id: number;
  workImage: string;
  workLink: string;
}

export interface ArtistsData {
  artistId: number;
  name: string;
  image: string;
  works: WorksData[];
  description: string;
  source: string;
}
