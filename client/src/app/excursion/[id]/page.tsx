import ExcursionInfo from "@/widgets/excursionInfo/components/ExcursionInfo";

export default function Page({ params }: { params: { id: string } }) {
    return <ExcursionInfo idExcursion={params.id}/>;
}