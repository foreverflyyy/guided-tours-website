"use client"
import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import styles from "./styles.module.scss"
import {Excursion} from "@/shared/types";

export const ExcursionCard = ({excursion}: {excursion: Excursion}) => {

    const router = useRouter();

    return (
        <div className={styles.card} onClick={() => router.push(`/excursion/${excursion._id}`)}>
            <div className={styles.flip__card_container}>
                <div className={styles.front}>
                    <div className={styles.text__card}>
                        <h3>Name: {excursion.name}</h3>
                    </div>
                    <Image
                        src={excursion.image}
                        alt={"excursion"}
                        width={200}
                        height={200}
                        className={"w-full h-full"}
                    />
                </div>
                <div className={styles.back}>
                    <h3>Description: {excursion.description}</h3>
                    <h3>Price: {excursion.price}</h3>
                </div>
            </div>
        </div>
    );
};