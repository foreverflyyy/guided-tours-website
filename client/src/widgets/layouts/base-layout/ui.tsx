/* eslint-disable boundaries/element-kinds */
import { usePageEvent } from 'nextjs-effector';
import type { PropsWithChildren } from 'react';
import { RequestWindow } from '../../request';
import { Header } from 'widgets/header';
import { SearchWindow } from 'entities/search-window';
import { appStarted } from 'shared/config';

// run process logic for all base layout pages
import 'processes/root';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  usePageEvent(appStarted);

  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <SearchWindow />
      <RequestWindow />
    </>
  );
};
