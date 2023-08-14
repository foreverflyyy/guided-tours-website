import React from 'react';
import {excursions} from "@/common/data/excursions";
import {Excursion} from "@/common/models/Excursion";
import ExcursionItem from "@/common/components/excurtions/ExcursionItem";

const ExcursionsList = () => {
    return (
        <div>
            <h3>Excursion list:</h3>
            {excursions?.map((excursion: Excursion) =>
                <ExcursionItem key={excursion.id} excursion={excursion}/>
            )}
        </div>
    );
};

export default ExcursionsList;