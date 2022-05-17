import styled from 'styled-components';

export const Section = styled.div`
width: 160px;
height: 1000px;
padding: 60px 0;
background-color: #FFE4D6;
&>a>i {
    font-size: 44px;
    cursor: pointer;
    margin: 37px;
    color: #E1AA98;
}
&>a.active {
    background-color: #6749A5;   
 }
`
