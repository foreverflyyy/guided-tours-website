import { GenresEnum, SortEnum } from 'shared/config';
import type { SelectOption } from '../types';

export const genres: SelectOption[] = [
  { value: '', label: 'Все' },
  { value: GenresEnum.Family, label: 'Семейные' },
  { value: GenresEnum.Adults, label: 'Взрослые' },
  { value: GenresEnum.Kaliningrad, label: 'Калининград' },
  { value: GenresEnum.Baltic, label: 'Балтийское море' },
  { value: GenresEnum.Kurshkaya, label: 'Куршская коса' },
];

export const sort: SelectOption[] = [
  { value: '', label: 'Рекомендуемые' },
  { value: SortEnum.Name, label: 'По названию' },
  { value: SortEnum.Price, label: 'По прайсу' },
];

export const prices: SelectOption[] = [
  { value: '', label: 'Любой рейтинг' },
  { value: '0-2000', label: 'Больше 9' },
  { value: '2000-4000', label: 'Больше 8' },
  { value: '4000-', label: 'От 4000 и выше' },
];

export const filters = [
  { label: 'Цена', queryName: 'prices', options: prices },
];
