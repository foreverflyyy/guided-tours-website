import { attach, createEvent, restore, sample } from 'effector';
import { commonApi } from 'shared/api';
import { appStarted } from 'shared/config';

export const pageStarted = createEvent();

const getExcursionsFx = attach({ effect: commonApi.getExcursions });
export const $excursions = restore(getExcursionsFx, null);

sample({
  clock: appStarted,
  target: [getExcursionsFx],
});
