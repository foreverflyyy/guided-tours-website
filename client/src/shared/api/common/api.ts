import { http } from './config';
import {Excursion} from "./types";

const routesConfig = http.createRoutesConfig({
    getExcursions: http.createRoute<void, Excursion[]>(() => ({
        url: `/excursion`,
        method: "get"
    })),
    getExcursionById: http.createRoute<string, Excursion>((id) => ({
        url: `/excursion/${id}`,
        method: "get"
    })),
});

export const commonApi = routesConfig.build();