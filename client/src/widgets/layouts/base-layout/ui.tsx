import type { PropsWithChildren } from 'react';
import { Header } from '@/widgets/header';
import { SearchWindow } from '@/entities/search-window';

// run process logic for all base layout pages
import 'processes/root';

export const BaseLayout = ({ children }: PropsWithChildren) => {
    //usePageEvent(appStarted);

    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <SearchWindow />
        </>
    );
};
