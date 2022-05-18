import React from 'react';
import { Main } from '../pages/main';
import { HeaderContent, Items, Title, NavItem } from './style';

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
          <NavItem>
            <a href="/#"
              className={filter === 'popular' ? 'active' : ''}
              onClick={onFilter('popular')}>Popular{'active'? <span></span> : ''}</a>
          </NavItem>
          <NavItem>
            <a href="/#"
              className={filter === 'favorite' ? 'active' : ''}
              onClick={onFilter('favorite')}>Favorite{'active'? <span></span> : ''}</a>
          </NavItem>
          <NavItem>
            <a href="/#"
              className={filter === 'new' ? 'active' : ''}
              onClick={onFilter('new')}>New{'active'? <span></span> : ''}</a>
          </NavItem>
        </Items>
      </HeaderContent>
      <Main filter={filter} />
    </>
  );
};

