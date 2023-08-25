import clsx from 'clsx';
import { requestModel } from 'widgets/request';
import { useToggler } from 'shared/lib/toggler';
import { Icon } from 'shared/ui/icon';
import styles from './styles.module.scss';

export const Request = () => {
  const { open } = useToggler(requestModel.toggler);

  return (
    <button onClick={open} className={clsx('btn-reset', styles.profile)}>
      <Icon type="common" name="link" />
      Отправить заявку
    </button>
  );
};
