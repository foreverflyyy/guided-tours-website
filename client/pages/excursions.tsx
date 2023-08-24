import { ExcursionsPage } from '@/pages/excursions';
import { createGIP } from '@/pages/shared';
import { catalogModel } from '@/widgets/catalog';

ExcursionsPage.getInitialProps = createGIP({
    pageEvent: catalogModel.pageStarted,
});

export default ExcursionsPage;
