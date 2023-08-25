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
  series: '/series',
  cartoons: '/cartoons',
  policy: '/policy',
  profile: '/request',
  favorites: '/request/favorites',
  history: '/request/history',

  // Get the URL for the movie catalog page
  catalog: (params: CatalogParams): string => {
    const searchParams = new URLSearchParams({ ...params });
    const url = `/films?${searchParams}`;

    return url;
  },

  // Get the URL for the movie page
  excursion: (id: Id): string => `/excursion/${id}`,

  // Get the URL for the movie page
  movie: (id: Id): string => `/film/${id}`,

  // Get the URL for the person page
  person: (id: Id): string => `/name/${id}`,
};
