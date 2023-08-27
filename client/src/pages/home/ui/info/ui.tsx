import clsx from 'clsx';
import { Title } from 'shared/ui/title';
import styles from './styles.module.scss';

export const Info = () => (
  <section className={styles.section}>
    <div className={clsx('container', styles.container)}>
      <Title className={styles.title} size="small" as="h2">
        Добро пожаловать на экскурсии в Калининграде от лучшего экскурсовода области!
      </Title>
      <p className={styles.desc}>
        У нас вы можете легко и быстро найти интересующию вас экскурсию благодаря нашему удобному поиску.
        Выбирайте экскурсию из любого уголка мира в любое время и в любом месте.
        Отправляйте заявку на нашем сайте и готовьтесь погружаться в интересную историю Калининграда!
      </p>
    </div>
  </section>
);
