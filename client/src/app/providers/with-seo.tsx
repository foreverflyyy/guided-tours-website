import { NextSeo } from 'next-seo';
import { ComponentType } from 'react';

// eslint-disable-next-line operator-linebreak
export const withSeo =
    <P extends object>(Component: ComponentType<P>) =>
        (props: P) =>
            (
                <>
                    <NextSeo
                        nofollow
                        noindex
                        title="Экскурсии в Калининграде и области с лучшим экскурсоводом!"
                        description="Сделайте свой отпуск незабываемым!"
                        openGraph={{
                            title: 'Экскурсии в Калиниграде',
                            description: 'Экскурсии в Калиниграде',
                        }}
                        additionalMetaTags={[
                            {
                                name: 'keywords',
                                content:
                                    'экскурсии калининград калининградская область куршская коса балтийское море',
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
