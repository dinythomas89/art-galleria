export interface ImageData {
  id: number;
  imgName: string;
  imgLink: string;
}

export interface ArtistsData {
  name: string;
  images: ImageData[];
  source: string;
}
