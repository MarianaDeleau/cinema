export type User = {
  name: string;
  lastname: string;
  email: string;
  birthdate: string;
  password: string;
  role: string;
  sessionToken?: string;
  viewed?: [string];
  idDB?: string;
};

export type AddUserType = Omit<User, "id">;

export type UserLoginType = Omit<User, "id" | "name" | "lastname" | "birthdate" | "role" | "viewed">;


export type Item = {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id: number;
  idDB: string;
  original_title?: string;
  original_language?: string;
  title: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  media_type: string;
  name?:string;
  first_air_date?: string
};

export type ApiResponse = {
  page: number, 
  results: Item[], 
  total_pages: number,
  total_results: number,
}

export type Filter = {
page: number,
search: string | undefined
}


export type Trailer = {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
  id: string,
}