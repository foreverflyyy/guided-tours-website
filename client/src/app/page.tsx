import HelloSection from "@/common/components/HelloSection";
import ExcursionsList from "@/common/components/excurtions/ExcursionsList";
import {Excursion} from "@/common/models/Excursion";

export default function Home({ params }: { params: {excursions: Excursion[]}}) {
    return (
        <>
            <HelloSection/>
            <ExcursionsList/>
        </>
    )
}