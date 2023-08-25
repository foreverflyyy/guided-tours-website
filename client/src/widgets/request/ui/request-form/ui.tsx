import { useStore } from 'effector-react';
import { useRef, useEffect } from 'react';
import { sessionModel } from 'entities/session';
import { Field, Form, useForm } from 'shared/form';
import { Button } from 'shared/ui/button';
import { Message } from '../message';
import { Transition } from '../transition';
import { maskString } from './lib';
import { requestModel } from 'widgets/request';
import styles from './styles.module.scss';

export const RequestForm = () => {
  const { onSubmit, fields } = useForm(requestModel.requestForm);
  const { email, name, countPeople } = useStore(requestModel.requestForm.$values);

  const maskName = maskString(name);
  const maskEmail = maskString(email);
  const maskCount = maskString(countPeople.toString());

  const pending = useStore(sessionModel.$pending);
  const inputRef = useRef<HTMLInputElement>(null);
  const state = useStore(requestModel.$state);
  const isAuthorizedState = state === 'submitted';

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <Transition animation="bounceOutUp" startIn={isAuthorizedState} offset={-30} delay={250}>
        <Form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.inputs}>
            <Transition offset={20} delay={350}>
              <Field.Input
                ref={inputRef}
                field={fields.email}
                type="name"
                className={styles.input}
                placeholder={'Ваш email'}
              />
              <Field.Input
                ref={inputRef}
                field={fields.name}
                type="name"
                className={styles.input}
                placeholder={'Ваше имя'}
              />
              <Field.Input
                ref={inputRef}
                field={fields.countPeople}
                type="name"
                className={styles.input}
                placeholder={'Количество человек'}
              />
              <Field.Input
                ref={inputRef}
                field={fields.countPeople}
                type="name"
                className={styles.input}
                placeholder={'Выберите дату'}
              />
            </Transition>
          </div>
          <Transition offset={40} delay={400}>
            <Button loading={pending} className={styles.btn} type="submit">
              Отправить заявку
            </Button>
          </Transition>
        </Form>
      </Transition>
      {isAuthorizedState && (
        <>
          <Transition offset={30} delay={300}>
            <Message className={styles.message} position="right" title={maskEmail} />
          </Transition>
          <Transition offset={30} delay={600}>
            <Message isSuccess title={'Заявка успешно отправлена'} />
          </Transition>
        </>
      )}
    </>
  );
};
