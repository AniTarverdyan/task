import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Photo, MainContent } from './style';
import 'simplebar/dist/simplebar.min.css';
import { filterFavorites, sortByNew, sortByPopular } from '../../../redux/main/actions';
import SimpleBar from 'simplebar-react';
import { RootState } from '../../../redux/store';


type Props = {
    filter: string
};

export const Main: React.FC<Props> = props => {
    const { filter } = props;
    const dispatch = useDispatch();
    const filtered = useSelector((state: RootState) => state.home.info);


    useEffect(() => {
        if (filter === 'popular') {
            dispatch(sortByPopular());
        } else if (filter === 'favorite') {
            dispatch(filterFavorites())
        } else if (filter === 'new') {
            dispatch(sortByNew());
        }
    }, [filter]);

    return (
        <MainContent>
            <SimpleBar style={{ maxHeight: '100%' }}>
                <div>
                    {filtered.map((item: any) => {
                        return <Photo key={item.popular}>
                            <img src={item.url} /> </Photo>
                    })}
                </div>
            </SimpleBar>
        </MainContent>

    )
};