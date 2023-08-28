import { useStore } from 'effector-react';
import { NextSeo } from 'next-seo';
import { usePageEvent } from 'nextjs-effector';
import { pageModel, getPageTitle } from 'pages/excursion';
import { MainSection } from './main-section';
import { Places } from './places';
import { SimilarExcursions } from './similar-excursions';
import { Tabs } from './tabs';

export const ExcursionPage = () => {
  const data = useStore(pageModel.$excursion);
  const name = getPageTitle(data?.name);
  const description = data?.description ?? '';
  const title = `${name} экскурсия в Калининграде`;

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
              url: data?.mainImage ?? '',
              alt: name,
            },
          ],
        }}
      />
      <MainSection />
      <Tabs />
      <Places />
      <SimilarExcursions/>
    </>
  );
};
