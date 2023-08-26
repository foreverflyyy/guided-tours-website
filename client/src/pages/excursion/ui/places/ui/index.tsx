import clsx from 'clsx';
import { useStore } from 'effector-react';
import { FreeMode } from 'swiper';
import { pageModel } from 'pages/excursion';
import { CarouselMultiply } from 'shared/ui/carousel-multiply';
import { Title } from 'shared/ui/title';
import { PlaceItem } from './place-item';
import styles from './styles.module.scss';

export const Places = () => {
  const data = useStore(pageModel.$excursion);

  if (data?.places)
    return null;

  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.container)}>
        <Title size="medium" className={styles.title}>
          Места
        </Title>
        <br/>
        <Title size="medium" className={styles.title}>
          Похожие экскурсии
        </Title>
        <CarouselMultiply
          modules={[FreeMode]}
          className={styles.carousel}
          options={{ freeMode: true }}
          navigation={false}
          slideClassName={styles.slide}
          items={data?.places}
          renderItem={(item) => <PlaceItem item={item} />}
        />
      </div>
    </section>
  );
};
