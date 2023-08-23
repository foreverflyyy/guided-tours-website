import GreetingSection from "@/entities/greeting/components/GreetingSection";
import ExcursionsList from "@/features/excursion/ExcursionsList";
import {Excursion} from "@/entities/excursion/models/Excursion";

export default function Home({ params }: { params: {excursions: Excursion[]}}) {
    return (
        <>
            <GreetingSection/>
            <ExcursionsList/>
        </>
    )
}