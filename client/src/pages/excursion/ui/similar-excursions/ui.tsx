import { useStore } from 'effector-react';
import { pageModel } from 'pages/excursion';
import { Category } from 'widgets/category';
import styles from './styles.module.scss';
import {ExcursionItem} from "entities/excursion/item";

export const SimilarExcursions = () => {
  const data = useStore(pageModel.$similarExcursions);

  if (!data)
    return null;

  return (
    <Category containerClass={styles.container}>
      <Category.Title className={styles.title}>Похожее</Category.Title>
      <Category.Carousel items={data} renderItem={(item) => <ExcursionItem item={item} />} />
    </Category>
  );
};
