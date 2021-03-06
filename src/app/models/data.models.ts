export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

enum Gender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  unknown = 'unknown',
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface EpisodesResponse {
  info: PageInfo;
  results: Episode[];
}

export interface CharactersResponse {
  info: PageInfo;
  results: Character[];
}
