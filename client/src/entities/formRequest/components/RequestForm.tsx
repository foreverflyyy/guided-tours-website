"use client"

import React, {useState} from 'react';
import Input from "@/shared/ui/Input";
import Select from "@/shared/ui/Select";
import {options} from "@/entities/formRequest/data/options";
import Button from "@/shared/ui/Button";

const RequestForm = () => {

    console.log(process.env.NEXT_PUBLIC_API_KEY)

    const [currentExcursion, setCurrentExcursion] = useState("");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");

    const handlerClick = () => {
        console.log("currentExcursion - " + currentExcursion);
        console.log("name - " + name);
        console.log("telephone - " + telephone);
    }

    return (
        <div>
            <h2 className={"text-center text-lg font-semibold"}>Запрос к бэкенду</h2>
            <div className={"max-w-md flex flex-col space-y-2"}>
                <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={"Введите ваше имя"}
                />
                <Input
                    value={telephone}
                    onChange={e => setTelephone(e.target.value)}
                    placeholder={"Введите ваш телефон"}
                />
                <Select
                    title={"Выберите экскурсию"}
                    currentOption={currentExcursion}
                    changeOption={(val: string) => setCurrentExcursion(val)}
                    options={options}
                />
                <Button onClick={() => handlerClick()}>Go request</Button>
            </div>
        </div>
    );
};

export default RequestForm;
