import { FC } from 'react';
import { Filters } from '../../const';
import { Styled } from './style';

export interface IFilters {
  setFilter: (f: string) => void,
  filter: string,
};
export const Header: FC<IFilters> = props => {
  const { filter, setFilter } = props;

  const onFilter = (f: string) => () => {
    setFilter(f);
  }

  return (
    <Styled.HeaderContent>
      <Styled.Title>Courses</Styled.Title>
      <Styled.ActionButtons>
        <Styled.FilterItem
          className={filter === Filters.popular ? Filters.active : ''}
          onClick={onFilter('popular')}>Popular</Styled.FilterItem>
        <Styled.FilterItem
          className={filter === Filters.favorite ? Filters.active : ''}
          onClick={onFilter('favorite')}>Favorite</Styled.FilterItem>
        <Styled.FilterItem
          className={filter === Filters.new ? Filters.active : ''}
          onClick={onFilter('new')}>New</Styled.FilterItem>
      </Styled.ActionButtons>
    </Styled.HeaderContent>
  );
};

