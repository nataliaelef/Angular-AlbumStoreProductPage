import { Track } from './track';

export interface Album {
  name: string;
  realeaseDate: string;
  coverImage: string;
  tracks: Track[];
}
