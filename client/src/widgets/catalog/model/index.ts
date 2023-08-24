import { attach, combine, createEvent, createStore, restore, sample } from 'effector';
import type { PageContext } from 'nextjs-effector';
import { commonApi } from '@/shared/api';
import { getCatalogType } from '../lib';

export const pageStarted = createEvent<PageContext>();

export const getExcursionsFx = attach({ effect: commonApi.getExcursions });
export const $excursions = restore(getExcursionsFx, null);

export const loadMore = createEvent();

export const $hasMore = createStore(false);

export const $limit = createStore(30)
    .on(loadMore, (state) => state + 60)
    .reset(pageStarted);

const $pageContext = createStore<PageContext | null>(null);

sample({
    clock: pageStarted,
    target: $pageContext,
});

const $params = combine({ context: $pageContext, limit: $limit });

sample({
    clock: [pageStarted, loadMore],
    source: $params,
    fn: ({ limit, context }) => ({ ...context?.query, limit, type: getCatalogType(context?.pathname ?? '') }),
    target: getExcursionsFx,
});

export const $pending = getExcursionsFx.pending;

sample({
    clock: getExcursionsFx.doneData,
    source: $limit,
    fn: (limit, { total }) => total > limit,
    target: $hasMore,
});