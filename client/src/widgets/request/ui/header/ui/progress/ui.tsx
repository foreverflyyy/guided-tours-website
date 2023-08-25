import { useStore } from 'effector-react';
import type { CSSProperties } from 'react';
import { requestModel } from 'widgets/request';
import styles from './styles.module.scss';

export const Progress = () => {
  const progress = useStore(requestModel.$progress);

  return <div className={styles.progress} style={{ '--progress-width': `${progress}%` } as CSSProperties} />;
};
