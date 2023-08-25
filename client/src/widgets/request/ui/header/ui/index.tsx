import clsx from 'clsx';
import { useStore } from 'effector-react';
import { requestModel } from 'widgets/request';
import { useToggler } from 'shared/lib/toggler';
import { Icon } from 'shared/ui/icon';
import { Progress } from './progress';
import styles from './styles.module.scss';

export const Header = () => {
  const { email, name, countPeople } = useStore(requestModel.requestForm.$values);
  const { close } = useToggler(requestModel.toggler);
  const state = useStore(requestModel.$state);
  const isStartState = state === 'create';

  return (
    <div className={styles.header}>
      {isStartState ? (
        <span className={styles.title}>Заполните заявку на экскурсию!</span>
      ) : (
        <div className={styles.text}>
          <span className={styles.title}>{'Заявка успешно отправлена!'}</span>
          <span className={styles.email}>{email}</span>
        </div>
      )}
      <button className={clsx('btn-reset', styles.close)} onClick={close}>
        <Icon type="common" name="close" />
      </button>
      <Progress />
    </div>
  );
};
