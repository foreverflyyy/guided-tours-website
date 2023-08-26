import { useStore } from 'effector-react';
import { pageModel } from 'pages/excursion';
import styles from './styles.module.scss';

export const Description = () => {
  const data = useStore(pageModel.$excursion);

  const words = data?.description?.split(' ');
  const shortDescription = words?.slice(0, 10).join(' ');

  return <p className={styles.desc}>{shortDescription}</p>;
};
