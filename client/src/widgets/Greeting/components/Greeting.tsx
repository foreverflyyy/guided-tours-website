import React from 'react';
import Image from "next/image";

export const GreetingSection = () => {
    return (
        <div className={"px-20 pt-7 flex flex-row justify-between"}>
            <h3 className={"text-xl font-semibold"}>Виктор Шелыгин. Предоставляю экскурсии по городу Калининград.</h3>
            <Image src={"/mainFace.jpg"} width={30} height={30} alt={"main hero"}/>
        </div>
    );
};