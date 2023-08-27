export interface Excursion {
  _id: string,
  name: string,
  description: string,
  image: string,
  price: string,
  places?: Place[]
}

export interface Place {
  name: string,
  image: string
}

export interface Video {
  /**
   * Url трейлера
   * @example "https://www.youtube.com/embed/ZsJz2TJAPjw"
   */
  url?: string | null;
  /** @example "Official Trailer" */
  name?: string | null;
  /** @example "youtube" */
  site?: string | null;
  /** @example "TRAILER" */
  type?: string | null;
  size: number;
}

export interface VideoTypes {
  trailers?: Video[];
  teasers: Video[];
}
