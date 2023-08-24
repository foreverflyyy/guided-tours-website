import {Excursion} from "@/shared/types";
import {getExcursions} from "@/widgets/Excursion/api/getExcursions";
import {ExcursionCard} from "@/entities/Excursion";
import styles from "./styles.module.scss"

export const ExcursionCatalog = async () => {

    const excursions: Excursion[] = await getExcursions().then(res => res);

    return (
        <div className={"px-10 pt-7"}>
            <h3 className={"py-2 text-lg font-bold"}>Excursion list:</h3>
            <div className={styles.catalog}>
                {excursions?.map((excursion: Excursion) =>
                    <ExcursionCard key={excursion._id} excursion={excursion}/>
                )}
            </div>
        </div>
    );
};