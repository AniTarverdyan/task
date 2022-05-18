import styled from 'styled-components';

export const MainContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
min-height: 0;
&>div {
    padding: 0 99px;
@media (max-width: 743px) {
    padding: 21px;
}
}
`
export const Photo = styled.image `
&>img {
    width: 100%;
    height: 544px;
    border-radius: 24px;
    margin: 0 0 60px 0;
}
@media  (max-width: 743px) {

    img {
        width: 100%;
        height: 274px;
    }

}
`

    
   
