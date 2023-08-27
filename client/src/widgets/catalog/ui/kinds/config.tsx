import { GenresEnum } from 'shared/config';
import { paths } from 'shared/routing';
import { Icon } from 'shared/ui/icon';

export const genres = [
  {
    href: paths.excursions,
    icon: <Icon type="genres" name="cup" />,
    text: 'Лучшие'
  },
  {
    href: paths.catalog({ genre: GenresEnum.Family }),
    icon: <Icon type="genres" name="knife" />,
    text: 'Семейные'
  },
  {
    href: paths.catalog({ genre: GenresEnum.Adults
    }),
    icon: <Icon type="genres" name="map" />,
    text: 'Взрослые',
  },
  {
    href: paths.catalog({ genre: GenresEnum.Kaliningrad }),
    icon: <Icon type="genres" name="rocket" />,
    text: 'Калининград',
  },
  {
    href: paths.catalog({ genre: GenresEnum.Baltic }),
    icon: <Icon type="genres" name="people" />,
    text: 'Балтийское море' },
  {
    href: paths.catalog({ genre: GenresEnum.Kurshkaya }),
    icon: <Icon type="genres" name="tank" />,
    text: 'Куршская коса'
  },
];
