import { useStore } from 'effector-react';
import { pageModel } from 'pages/excursion';
import { minutesToHour, getSeasonString } from 'shared/lib';
import styles from './styles.module.scss';

export const Info = () => {
  const data = useStore(pageModel.$excursion);

  const items = [
    data?.name,
    data?.description
  ];

  return (
    <div className={styles.root}>
      {items.filter(Boolean).map((item) => (
        <span key={item} className={styles.item}>
          {item}
        </span>
      ))}
    </div>
  );
};
