/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx';
import { useEvent, useStore } from 'effector-react';
import { useEffect } from 'react';
import { useToggler } from '@/shared/lib';
import { Button } from '@/shared/ui';
import styles from './styles.module.scss';

interface CatalogProps {
    title: string;
}

export const Catalog = ({ title }: CatalogProps) => {

    useEffect(() => {

    }, []);

    return (
        <section className={styles.section}>
            <div className={clsx('container', styles.container)}>
                Catalog
            </div>
        </section>
    );
};
