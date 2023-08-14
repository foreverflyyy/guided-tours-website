import React from 'react';
import Image from "next/image";

const HelloSection = () => {
    return (
        <div className={"px-20 pt-7 flex flex-row justify-between"}>
            <h3 className={"text-xl font-semibold"}>Виктор Шелыгин. Предоставляю экскурсии по городу Калининград.</h3>
            <Image src={"https://i.ibb.co/CQHVm2n/mainFace.jpg"} width={300} height={300} alt={"main hero"}/>
        </div>
    );
};

export default HelloSection;