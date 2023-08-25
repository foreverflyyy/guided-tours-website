import { NextSeo } from 'next-seo';
import { ComponentType } from 'react';

export const withSeo =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) =>
    (
      <>
        <NextSeo
          nofollow
          noindex
          title="Экскурсии в городе Калининград у лучшего экскурсовода области!"
          description="Устройте приятный отпуск у нас в Калининградской области!"
          openGraph={{
            title: 'Экскурсии Калиниград.',
            description: 'Экскурсии Калиниград',
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content:
                'экскурсии калининград область куршская балтийская коса балтийское море',
            },
            {
              name: 'viewport',
              content: 'width=device-width,initial-scale=1',
            },
            {
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
          ]}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.ico',
            },
          ]}
        />
        <Component {...props} />
      </>
    );
