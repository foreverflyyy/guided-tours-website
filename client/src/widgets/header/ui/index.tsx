import React from 'react';
import {clsx} from "clsx";
import {Menu} from "./menu";
import {Logo} from "./logo";
import {Burger} from "./burger";
import {SearchButton} from "./search-button";
import {useHeaderFixed} from "@/widgets/header/lib";
import styles from "./styles.module.scss"

export const Header = () => {

    const {isFixed} = useHeaderFixed();

    return (
        <header
            className={clsx(styles.header, {
                [styles.fixed]: isFixed,
            })}
        >
            <div className={clsx('container', styles.container)}>
                <Logo />
                <div className={styles.row}>
                    <SearchButton />
                    <Burger />
                </div>
            </div>
            <Menu />
        </header>
    );
};