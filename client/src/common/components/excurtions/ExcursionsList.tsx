import {Excursion} from "@/common/models/Excursion";
import ExcursionItem from "@/common/components/excurtions/ExcursionItem";
import {fetchMongo} from "@/common/helpers/fetchMongo";

const ExcursionsList = async () => {

    const excursions: Excursion[] = await fetchMongo("excursion");

    return (
        <div className={"px-10 pt-7"}>
            <h3 className={"py-2 text-lg font-bold"}>Excursion list:</h3>
            {excursions?.map((excursion: Excursion) =>
                <ExcursionItem key={excursion._id} excursion={excursion}/>
            )}
        </div>
    );
};

export default ExcursionsList;