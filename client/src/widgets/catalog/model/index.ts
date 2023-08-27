import { attach, createEvent, restore, sample } from 'effector';
import { commonApi } from 'shared/api';

export const pageStarted = createEvent();

const getExcursionsFx = attach({ effect: commonApi.getExcursions });
export const $excursions = restore(getExcursionsFx, null);

sample({
  clock: pageStarted,
  target: [getExcursionsFx],
});
