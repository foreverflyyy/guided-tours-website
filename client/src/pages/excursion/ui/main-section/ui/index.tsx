import clsx from 'clsx';
import { useStore } from 'effector-react';
import type { CSSProperties } from 'react';
import { pageModel } from 'pages/excursion';
import styles from './styles.module.scss';

export const MainSection = () => {
  const data = useStore(pageModel.$excursion);

  return (
    <section className={styles.section}>
      <div className={styles.height} />
      <div style={{ backgroundImage: `url(${data?.mainImage})` } as CSSProperties} className={styles.bg} />
      <div className={clsx('container', styles.container)}>
        <div className={styles.content}>
          {/*<Title />
          <Info />
          <Description />
          <MainPersons />
          <MainButtons />
          <MobileActions />*/}
        </div>
      </div>
      {/*<TrailerModal />
      <ShareModal />
      <Player />*/}
    </section>
  );
};
