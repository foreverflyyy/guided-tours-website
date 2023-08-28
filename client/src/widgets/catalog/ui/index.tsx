import clsx from 'clsx';
import { useStore } from 'effector-react';
import { catalogModel } from 'widgets/catalog';
import { Filters, filtersModel } from 'features/filters';
import { ExcursionItem } from 'entities/excursion/item';
import { useToggler } from 'shared/lib';
import { Title, Icon, Button } from 'shared/ui';
import { useElementOnScreen } from '../lib';
import {Kinds} from "./kinds";
import styles from './styles.module.scss';

interface CatalogProps {
  title: string;
}

export const Catalog = ({ title }: CatalogProps) => {
  const [buttonRef, isVisible] = useElementOnScreen<HTMLButtonElement>({ rootMargin: '450px' });
  const { open } = useToggler(filtersModel.toggler);
  const params = useStore(filtersModel.$params);
  const data = useStore(catalogModel.$excursions);

  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.top}>
          <Title className={styles.title}>
            {title}
          </Title>
          <button onClick={open} className={clsx('btn-reset', styles.btn)}>
            <Icon type="common" name="filters" />
          </button>
        </div>
        <Kinds/>
        <div className={styles.grid}>
          {data?.map((item) => (
            <ExcursionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
