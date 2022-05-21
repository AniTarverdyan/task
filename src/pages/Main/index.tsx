import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'simplebar/dist/simplebar.min.css';
import { filterFavorites, sortByNew, sortByPopular } from '../../redux/main/actions';
import SimpleBar from 'simplebar-react';
import { Styled } from './style';
import { State } from '../../redux/main/reducers'
import { Filters } from '../../const';

interface Filter {
    filter: string,
};

export const Main: FC<Filter> = props => {
    const { filter } = props;
    const dispatch = useDispatch();
    const filtered = useSelector((state: State) => state.home.info);

    useEffect(() => {
        if (filter === Filters.popular) {
            dispatch(sortByPopular());
        } else if (filter === Filters.favorite) {
            dispatch(filterFavorites())
        } else if (filter === Filters.new) {
            dispatch(sortByNew());
        }
    }, [filter]);

    return (
        <Styled.MainContent>
            <SimpleBar style={{ maxHeight: '100%' }}>
                <div>
                    {filtered.map((item: any) => {
                        return <Styled.Photo key={item.popular}>
                            <img src={item.url} /> </Styled.Photo>
                    })}
                </div>
            </SimpleBar>
        </Styled.MainContent>

    )
};