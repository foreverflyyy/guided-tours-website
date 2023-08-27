import { http } from './config';
import type { Excursion } from './types';

const LIMIT = 15;

const routesConfig = http.createRoutesConfig({
  getExcursions: http.createRoute<void, Excursion[]>(() => ({
    url: `/excursion`,
  })),
  getExcursionById: http.createRoute<string, Excursion>((id) => ({
    url: `/excursion/${id}`,
  })),
  getSimilarExcursions: http.createRoute<string, Excursion[]>((id) => ({
    url: `/excursion`,
  })),
  searchByName: http.createRoute<string, Excursion[]>((query) => ({
    url: '/excursion',
    params: {
      query
    },
  })),
});

export const commonApi = routesConfig.build();
