interface CatalogParams {
  genre?: string;
  rating?: string;
  year?: string;
  sort?: string;
}

type Id = number | string | null | undefined;

export const paths = {
  home: '/',
  excursions: '/excursions',
  profile: '/request',

  catalog: (params: CatalogParams): string => {
    const searchParams = new URLSearchParams({ ...params });
    const url = `/excursion?${searchParams}`;

    return url;
  },

  excursion: (id: Id): string => `/excursion/${id}`,

  imagesByExcursion: (id: Id): string => `/excursion/images/${id}`,

  placesByExcursion: (id: Id): string => `/excursion/places/${id}`,
};
