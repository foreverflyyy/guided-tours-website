import Image from 'next/image';
import Link from 'next/link';
import type {Excursion} from 'shared/api';
import { paths } from 'shared/routing';
import styles from './styles.module.scss';

interface SearchItemProps {
  item: Excursion;
}

export const SearchItem = ({ item }: SearchItemProps) => {
  const { _id, name, image, description, price } = item;

  return (
    <li className={styles.item}>
      <Link className={styles.link} href={paths.excursion(_id)}>
        <div className={styles.image}>
          <Image sizes="100%" fill quality={100} alt={item?.name ?? ''} src={image} />
        </div>
        <div className={styles.text}>
          <span className={styles.name}>{name}</span>
          <div className={styles.info}>
            <span className={styles.year}>{description}</span>
            <span className={styles.year}>{price}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};
