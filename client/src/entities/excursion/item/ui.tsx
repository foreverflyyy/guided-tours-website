import Image from 'next/image';
import Link from 'next/link';
import type {Excursion} from 'shared/api';
import { paths } from 'shared/routing';
import styles from './styles.module.scss';

interface ExcursionItemProps {
  item: Partial<Excursion>;
  small?: boolean;
}

export const ExcursionItem = ({ item, small }: ExcursionItemProps) => {

  return (
    <Link className={styles.item} href={paths.excursion(item?.id)}>
      <div className={styles.imageWrapper}>
        {item?.id && (
          <Image
            sizes="100%"
            fill
            quality={100}
            className={styles.image}
            alt={item?.name ?? ''}
            src={item?.mainImage || ''}
          />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{item?.name}</h3>
        {!small && (
          <div className={styles.info}>
            <span className={styles.year}>{item?.price}</span>
          </div>
        )}
      </div>
    </Link>
  );
};
