import React from 'react';
import {getExcursionInfoById} from "../api/getExcursionInfoById";

export const ExcursionInfo = async ({idExcursion}: {idExcursion: string}) => {

    const data = await getExcursionInfoById(idExcursion).then(res => res);
    console.log(1, data);

    return (
        <div>

        </div>
    );
};