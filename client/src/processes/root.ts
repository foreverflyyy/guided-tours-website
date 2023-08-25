import { sample } from 'effector';
import { reset } from 'patronum/reset';
import { requestModel } from 'widgets/request';
import { searchModel } from 'entities/search-window';
import { navigationModel } from 'shared/navigation';

reset({
  clock: navigationModel.$router,
  target: [searchModel.$search, searchModel.$debouncedValue, requestModel.$progress, requestModel.$state],
});

sample({
  clock: navigationModel.$router,
  target: [searchModel.toggler.close, requestModel.requestForm.reset],
});
