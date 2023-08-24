import { createGSSP } from '@/pages/shared';
import { pageModel } from '@/pages/excursion';

export const getServerSideProps = createGSSP({
    pageEvent: pageModel.pageStarted,
});

export { ExcursionPage as default } from '@/pages/excursion';