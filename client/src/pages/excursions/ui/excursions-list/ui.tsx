import { useStore } from 'effector-react';
import { pageModel } from 'pages/excursions';
import { Category } from 'widgets/category';
import { ExcursionItem } from 'entities/movie/item';

export const ExcursionsList = () => {
  const data = useStore(pageModel.$excursions);

  if(!data)
    return null;

  return (
    <Category>
      <Category.Title href={""}>Экскурсии</Category.Title>
      <Category.Carousel items={data!} renderItem={(item) => <ExcursionItem item={item} />} />
    </Category>
  );
};
