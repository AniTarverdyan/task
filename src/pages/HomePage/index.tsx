import { FC } from "react"
import { Header, IFilters } from "../../components/header"
import { Main } from "../Main"
import { Styled } from "./style"


const HomePage: FC<IFilters> = props => {
    const {filter, setFilter} = props
    return (
        <Styled.HomePageContent>
            <Header filter={filter} setFilter={setFilter}/>
            <Main filter={filter}/>
        </Styled.HomePageContent>
    )
}

export default HomePage;