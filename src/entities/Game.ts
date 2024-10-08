import { Genres } from "./Genres";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  genres: Genres[];
  publishers: Publisher[];
  slug: string;
  description_raw: string;
  metacritic: number;
  rating_top: number;
}
