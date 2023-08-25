import { useRef } from 'react';
import { requestModel } from 'widgets/request';
import { useToggler } from 'shared/lib/toggler';
import { Modal } from 'shared/ui/modal';
import { Header } from './header';
import { RequestForm } from './request-form';
import styles from './styles.module.scss';

export const RequestWindow = () => {
  const { isOpen, close } = useToggler(requestModel.toggler);
  const windowRef = useRef<HTMLDivElement>(null);

  return (
    <Modal isOpen={isOpen} close={close} ref={windowRef} className={styles.window}>
      <Header />
      <div className={styles.container}>
        <RequestForm />
      </div>
    </Modal>
  );
};
