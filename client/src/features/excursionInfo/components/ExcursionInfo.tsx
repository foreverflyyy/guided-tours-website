import React from 'react';
import {getExcursionInfoById} from "@/widgets/excursionInfo/api/getExcursionInfoById";

const ExcursionInfo = async ({idExcursion}: {idExcursion: string}) => {

    const data = await getExcursionInfoById(idExcursion).then(res => res);
    console.log(1, data);

    return (
        <div>

        </div>
    );
};

export default ExcursionInfo;
