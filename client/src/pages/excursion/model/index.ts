import { attach, createEvent, restore, sample } from 'effector';
import type { PageContext } from 'nextjs-effector';
import { commonApi, internalApi } from 'shared/api';
import { createToggler } from 'shared/lib/toggler';

export const pageStarted = createEvent<PageContext>();
export const clientStarted = createEvent<PageContext>();

export const trailerToggler = createToggler();
export const shareToggler = createToggler();
export const playerToggler = createToggler();


const getExcursionByIdFx = attach({ effect: commonApi.getExcursionById });
export const $excursion = restore(getExcursionByIdFx, null);

sample({
  clock: pageStarted,
  fn: ({ params }) => params?.id as string,
  target: getExcursionByIdFx,
});
