import React from 'react';
import {excursions} from "@/common/data/excursions";
import {Excursion} from "@/common/models/Excursion";
import ExcursionItem from "@/common/components/excurtions/ExcursionItem";

const ExcursionsList = () => {
    return (
        <div className={"px-10 pt-7"}>
            <h3 className={"py-2 text-lg font-bold"}>Excursion list:</h3>
            {excursions?.map((excursion: Excursion) =>
                <ExcursionItem key={excursion.id} excursion={excursion}/>
            )}
        </div>
    );
};

export default ExcursionsList;