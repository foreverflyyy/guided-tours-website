import { useStore } from 'effector-react';
import { pageModel } from 'pages/excursion';
import { Category } from 'widgets/category';
import styles from './styles.module.scss';
import {ExcursionItem} from "entities/excursion/item";

export const SimilarExcursions = () => {
  const excursion = useStore(pageModel.$excursion);
  const data = useStore(pageModel.$excursions)?.filter(ex => ex.id !== excursion?.id);

  if (!data)
    return null;

  return (
    <Category containerClass={styles.container}>
      <Category.Title className={styles.title}>Похожие экскурсии</Category.Title>
      <Category.Carousel items={data} renderItem={(item) => <ExcursionItem item={item} />} />
    </Category>
  );
};
