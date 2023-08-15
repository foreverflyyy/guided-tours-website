import React from 'react';
import {Excursion} from "@/common/models/Excursion";
import Image from "next/image";

const ExcursionItem = ({excursion}: {excursion: Excursion}) => {
    return (
        <div className={"border-2 rounded-md px-7 py-5 border-gray-500 flex justify-between"}>
            <div className={"flex flex-col"}>
                <h3>Name: {excursion.name}</h3>
                <h3>Description: {excursion.description}</h3>
            </div>
            <Image src={excursion.image} alt={"excursion"} width={100} height={100}/>
        </div>
    );
};

export default ExcursionItem;