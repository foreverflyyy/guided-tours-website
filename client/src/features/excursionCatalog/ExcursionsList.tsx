import {Excursion} from "@/entities/excursion/models/Excursion";
import ExcursionItem from "@/entities/excursion/components/ExcursionItem";
import {getExcursion} from "@/features/excursion/api/getExcursions";

const ExcursionsList = async () => {

    const excursions: Excursion[] = await getExcursion().then(res => res);

    return (
        <div className={"px-10 pt-7"}>
            <h3 className={"py-2 text-lg font-bold"}>Excursion list:</h3>
            <div className={"flex flex-row flex-wrap"}>
                {excursions?.map((excursion: Excursion) =>
                    <ExcursionItem key={excursion._id} excursion={excursion}/>
                )}
            </div>
        </div>
    );
};

export default ExcursionsList;