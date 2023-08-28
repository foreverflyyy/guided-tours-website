import styles from './styles.module.scss';
import {useStore} from "effector-react";
import { pageModel } from 'pages/excursion';
import {ExcursionItem} from "entities/excursion/item";
import {paths} from "shared/routing";
import Image from "next/image";
import Link from "next/link";

export const Images = () => {

  const data = useStore(pageModel.$excursion);

  return (
    <div className={styles.grid}>
      {data?.images.map((item) => (
        <div className={styles.item}>
          <div className={styles.imageWrapper}>
            <Image
              sizes="100%"
              fill
              quality={100}
              className={styles.image}
              alt={'image'}
              src={item}
            />
          </div>
        </div>
      ))}
    </div>
  )
};
