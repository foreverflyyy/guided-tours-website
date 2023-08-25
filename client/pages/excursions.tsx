import { pageModel } from 'pages/excursions';
import { createGSSP } from 'pages/shared';

export const getServerSideProps = createGSSP({
  pageEvent: pageModel.pageStarted,
});

export { ExcursionsPage as default } from 'pages/excursions';
