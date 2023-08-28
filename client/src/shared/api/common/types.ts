export interface Excursion {
  id: string,
  name: string,
  description: string,
  mainImage: string,
  price: string,
  images: string[],
  places: Place[]
}

export interface Place {
  id: number
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
