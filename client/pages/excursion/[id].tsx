import { pageModel } from 'pages/excursion';
import { createGSSP } from 'pages/shared';

export const getServerSideProps = createGSSP({
  pageEvent: pageModel.pageStarted,
});

export { ExcursionPage as default } from 'pages/excursion';
