import React from 'react';
import { Main } from '../pages/main';
import { HeaderContent, Items, Title, Button } from './style';

type Props = {
  setFilter: (f: string) => void,
  filter: string,
};
export const Header: React.FC<Props> = props => {
  const { filter, setFilter } = props;

  const onFilter = (f: string) => () => {
    setFilter(f);
  }

  return (
    <>
      <HeaderContent>
        <Title>Courses</Title>
        <Items>
          <Button>
            <a
              className={filter === 'popular' ? 'active' : ''}
              onClick={onFilter('popular')}>Popular</a>
          </Button>
          <Button>
            <a
              className={filter === 'favorite' ? 'active' : ''}
              onClick={onFilter('favorite')}>Favorite</a>
          </Button>
          <Button>
            <a
              className={filter === 'new' ? 'active' : ''}
              onClick={onFilter('new')}>New</a>
          </Button>
        </Items>
      </HeaderContent>
      <Main filter={filter} />
    </>
  );
};

