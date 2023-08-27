import clsx from 'clsx';
import { useEvent, useStore } from 'effector-react';
import { useRouter } from 'next/router';
import { pageModel } from 'pages/excursion';
import { useToggler } from 'shared/lib';
import { Button } from 'shared/ui/button';
import { Icon } from 'shared/ui/icon';
import styles from './styles.module.scss';

export const MainButtons = () => {
  const { query } = useRouter();
  const data = useStore(pageModel.$excursion);
  const trailerToggler = useToggler(pageModel.trailerToggler);
  const playerToggler = useToggler(pageModel.playerToggler);

  return (
    <div className={styles.btns}>
      <Button onClick={playerToggler.open} size="big" className={styles.btn} gradient variant="glass">
        Смотреть трейлер
      </Button>
      <Button onClick={trailerToggler.open} size="big" className={styles.btn} variant="glass">
        Трейлер
      </Button>
      <Button
        size="big"
        className={clsx(styles.btn)}
        variant="glass"
      >
        <Icon type="common" name="bookmark" />
      </Button>
    </div>
  );
};
