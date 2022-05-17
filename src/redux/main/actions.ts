export const FILTER_FAVORITES = 'FILTERFAVORITES';
export const SORT_BY_POPULAR = 'SORTBYPOPUAR';
export const SORT_BY_NEW = 'SORTBYNEW';

export const filterFavorites = () => {
  return {
    type: FILTER_FAVORITES
  }
};

export function sortByPopular() {
  return {
    type: SORT_BY_POPULAR
  }
};

export function sortByNew() {
  return {
    type: SORT_BY_NEW
  }
};