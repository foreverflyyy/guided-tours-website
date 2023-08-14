import React from 'react';
import {Excursion} from "@/common/models/Excursion";

const ExcursionItem = ({excursion}: {excursion: Excursion}) => {
    return (
        <div>
            <h3>Name: {excursion.name}</h3>
            <h3>Description: {excursion.description}</h3>
        </div>
    );
};

export default ExcursionItem;