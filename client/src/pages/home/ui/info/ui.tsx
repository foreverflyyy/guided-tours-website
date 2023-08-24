import clsx from 'clsx';
import { Title } from '@/shared/ui';
import styles from './styles.module.scss';

export const Info = () => (
    <section className={styles.section}>
        <div className={clsx('container', styles.container)}>
            <Title className={styles.title} size="small" as="h2">
                Добро пожаловать на экскурсии в Калининград!
            </Title>
            <p className={styles.desc}>
                У нас вы можете легко и быстро найти интересующию вас экскурсию!
            </p>
        </div>
    </section>
);
