import type { PropsWithChildren } from 'react';
import { Header } from '@/widgets/header';
import {usePageEvent} from "nextjs-effector";
import {appStarted} from "@/shared/config/init";
import 'processes/root';

export const BaseLayout = ({ children }: PropsWithChildren) => {
    usePageEvent(appStarted);

    return (
        <>
            <Header />
            <main className="main">{children}</main>
        </>
    );
};
