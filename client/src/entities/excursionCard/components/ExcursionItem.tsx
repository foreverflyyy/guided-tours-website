"use client"
import React from 'react';
import {Excursion} from "@/entities/excursion/models/Excursion";
import Image from "next/image";
import Button from "@/shared/ui/Button";
import {useRouter} from "next/navigation";

const ExcursionItem = ({excursion}: {excursion: Excursion}) => {

    const router = useRouter();

    return (
        <div className={"max-w-[400px] border-2 rounded-md px-3 py-5 border-gray-500 flex justify-between"}>
            <div className={"flex flex-col"}>
                <div className={"flex flex-col"}>
                    <h3>Name: {excursion.name}</h3>
                    <h3>Description: {excursion.description}</h3>
                </div>
                <Image
                    src={excursion.image}
                    alt={"excursion"}
                    width={200}
                    height={200}
                    className={"w-full h-full"}
                />
                <Button onClick={() => router.push(`/${excursion._id}`)}>Подробнее</Button>
            </div>
        </div>
    );
};

export default ExcursionItem;