import { getCurrentYear, getYears } from 'shared/lib/date';
import { http } from './config';
import type { CatalogParams, Data, Movie, MovieEntity, Person, Excursion } from './types';

const LIMIT = 15;

const routesConfig = http.createRoutesConfig({
  getExcursions: http.createRoute<void, Excursion[]>(() => ({
    url: `/excursion`,
  })),
  getMovieById: http.createRoute<string, Movie>((id) => ({
    url: `/v1.3/movie/${id}`,
  })),
  getPersonById: http.createRoute<string, Person>((id) => ({
    url: `/v1/person/${id}`,
  })),
  getCatalog: http.createRoute<CatalogParams, Data<MovieEntity>>(
    ({ type, limit, genre, rating = '1-10', sort, year = getYears() }) => ({
      url: '/v1.3/movie',
      params: {
        year,
        typeNumber: type,
        'genres.name': genre,
        'rating.kp': rating,
        'poster.previewUrl': '!null',
        sortField: [sort, 'votes.kp'],
        sortType: ['-1', '-1'],
        limit,
      },
    }),
  ),
  searchByName: http.createRoute<string, Data<MovieEntity>>((name) => ({
    url: '/v1.3/movie',
    params: {
      name,
      limit: 30,
      sortField: ['year', 'votes.kp'],
      sortType: ['-1', '-1'],
      selectFields: 'id name poster year rating',
      'poster.previewUrl': '!null',
    },
  })),
});

export const commonApi = routesConfig.build();
