import clsx from 'clsx';
import { useStore } from 'effector-react';
import { pageModel } from 'pages/excursion';
import { Title } from 'shared/ui/title';
import { PlaceItem } from './place-item';
import styles from './styles.module.scss';
import {Category} from "widgets/category";

export const Places = () => {
  const data = useStore(pageModel.$excursion);

  if (!data?.places)
    return null;

  return (
    <section className={styles.section}>
      <Category containerClass={styles.container}>
        <Category.Title className={styles.title}>Места</Category.Title>
        <Category.Carousel items={data!.places} renderItem={(item) => <PlaceItem item={item} />} />
      </Category>
    </section>
  );
};
