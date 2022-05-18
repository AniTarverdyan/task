import styled from 'styled-components';

export const Section = styled.div`
width: 160px;
height: 1002px;
padding: 127px 0;
background-color: #FFE4D6;
display: flex;
flex-direction: column;

&>div>a>img {
    margin: 37px;
    cursor: pointer;
    filter: brightness(0) saturate(100%) invert(75%) sepia(2%) saturate(4286%) hue-rotate(327deg) brightness(96%) contrast(90%);
    @media (max-width: 743px) {
        vertical-align: middle;
    }
}
&>div>a.active {
    display: flex;
    align-items: center;
     filter: brightness(0) saturate(100%) invert(26%) sepia(41%) saturate(2081%) hue-rotate(234deg) brightness(97%) contrast(79%);

     &>span {
            background-color: #6749A5;
            width: 4px;
            height: 40px;
            display: block;
            align-items: center;
        }
}
@media  (max-width: 743px) {
    width: 80px !important;
    align-items: center;
}
`

