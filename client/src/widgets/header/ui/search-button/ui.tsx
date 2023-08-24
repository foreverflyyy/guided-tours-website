import clsx from 'clsx';
import { Icon } from '@/shared/ui/icon';
import styles from './styles.module.scss';

export const SearchButton = () => {
    //const { open } = useToggler(searchModel.toggler);

    return (
        <button onClick={() => {}} className={clsx('btn-reset', styles.btn)}>
            <Icon type="common" name="search" />
        </button>
    );
};