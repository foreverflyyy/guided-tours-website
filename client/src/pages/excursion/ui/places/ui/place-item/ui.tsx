import Image from 'next/image';
import Link from 'next/link';
import type {Place} from 'shared/api';
import { paths } from 'shared/routing';
import styles from './styles.module.scss';

interface PersonItemProps {
  item: Place;
}

export const PlaceItem = ({ item }: PersonItemProps) => (
  <Link className={styles.item} href={paths.person(item?._id)}>
    <div className={styles.image}>
      <Image sizes="100%" fill src={item?.image ?? ''} alt={item?.name ?? ''} />
    </div>
    <span className={styles.name}>{item?.name}</span>
    <span className={styles.profession}>Address: {item?.address}</span>
  </Link>
);
