import { http } from './config';
import type { Request } from './types';

const routesConfig = http.createRoutesConfig({
    sendRequest: http.createRoute<Request, string>((data) => ({
        url: '/excursion/request',
        method: 'post',
        data,
    })),
});

export const internalApi = routesConfig.build();
