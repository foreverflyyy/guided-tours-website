import {ExcursionInfo} from "@/widgets/Excursion";

export default function Page({ params }: { params: { id: string } }) {
    return <ExcursionInfo idExcursion={params.id}/>;
}