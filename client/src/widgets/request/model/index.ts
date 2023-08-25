import { createEvent, createStore } from 'effector';
import {number, object, string} from 'yup';
import { createForm } from 'shared/form';
import { createToggler } from 'shared/lib/toggler';

export const toggler = createToggler();

export const requestForm = createForm({
  initialValues: {
    name: '',
    email: '',
    countPeople: 0
  },
  schema: object({
    name: string().required(),
    email: string().email().required(),
    countPeople: number().required(),
  }),
});

export const editClicked = createEvent();
export const requestSuccess = createEvent();

export const $progress = createStore(5)
  .on(editClicked, () => 30)
  .on(requestSuccess, () => 80);

export const $state = createStore<'create' | 'submitted'>('create')
  .on(editClicked, () => 'create')
  .on(requestSuccess, () => 'submitted');
