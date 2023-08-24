import React from 'react';
import {getExcursionInfoById} from "../api/getExcursionInfoById";
import {Excursion} from "@/shared/types";
import Image from "next/image";
import Button from "@/shared/ui/button/ui";

export const ExcursionInfo = async ({idExcursion}: {idExcursion: string}) => {

    const excursion: Excursion = await getExcursionInfoById(idExcursion).then(res => res);

    return (
        <div className={"md:container md:mx-auto pt-10"}>
            <div className={"flex flex-col"}>
                <div className={"flex flex-row justify-between"}>
                    <div className={"text-xl italic"}>
                        <h3>Экскурсия: {excursion.name}</h3>
                        <h3>Локации: </h3>
                        <h3>Описание: {excursion.description}</h3>
                        <h3>Цена: {excursion.price}</h3>
                    </div>
                    <Image
                        src={excursion.image}
                        alt={"excursion"}
                        width={200}
                        height={200}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <h3 className={"text-xl font-semibold py-3"}>Галерея:</h3>
                    <div className={"grid gap-4 grid-flow-row grid-flow-col"}>
                        <Image
                            src={excursion.image}
                            alt={"excursion"}
                            width={200}
                            height={200}
                        />
                        <Image
                            src={excursion.image}
                            alt={"excursion"}
                            width={200}
                            height={200}
                        />
                        <Image
                            src={excursion.image}
                            alt={"excursion"}
                            width={200}
                            height={200}
                        /><Image
                            src={excursion.image}
                            alt={"excursion"}
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className={"py-10 w-full flex justify-center"}>
                    <Button>Оставить заявку!</Button>
                </div>
            </div>
        </div>
    );
};