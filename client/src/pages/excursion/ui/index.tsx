import { useStore } from 'effector-react';
import { NextSeo } from 'next-seo';
import { usePageEvent } from 'nextjs-effector';
import { pageModel, getPageTitle } from '@/pages/excursion';
import { MainSection } from './main-section';
import { IconsList } from './icons-list';

export const ExcursionPage = () => {
    const data = useStore(pageModel.$excursion);
    const name = getPageTitle(data?.name);
    const description = data?.description ?? '';
    const title = `Экскурсия - ${name}`;

    usePageEvent(pageModel.clientStarted);

    return (
        <>
            <NextSeo
                nofollow
                noindex
                title={title}
                description={description}
                openGraph={{
                    title,
                    description,
                    images: [
                        {
                            url: data?.image ?? '',
                            alt: name,
                        },
                    ],
                }}
            />
            <MainSection />
            <IconsList />
        </>
    );
};
