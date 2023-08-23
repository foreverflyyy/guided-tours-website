"use client"
import React from 'react';
import {Excursion} from "@/shared/types/Excursion";
import Image from "next/image";
import Button from "@/shared/ui/Button";
import {useRouter} from "next/navigation";
import styles from "./styles.module.scss"

export const ExcursionCard = ({excursion}: {excursion: Excursion}) => {

    const router = useRouter();

    return (
        <div className={styles.card}>
            <div className={styles.flip__card_container}>
                <div className={styles.front}>
                    <div className={"flex flex-col"}>
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