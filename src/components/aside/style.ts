import styled from 'styled-components';

 const Section = styled.div`
width: 160px;
height: 100%;
padding: 127px 0;
background-color: #FFE4D6;
display: flex;
flex-direction: column;


&>div {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 30px 0;
    height: 30px;
    border-left: 4px solid transparent;
    &.active {
        border-color: #6749A5;
        filter: brightness(0) saturate(100%) invert(26%) sepia(41%) saturate(2081%) hue-rotate(234deg) brightness(97%) contrast(79%);
    }
    }   
`
 const Icons = styled.img`
    margin: 37px;
    align-items: center;
    cursor: pointer;
    filter: brightness(0) saturate(100%) invert(75%) sepia(2%) saturate(4286%) hue-rotate(327deg) brightness(96%) contrast(90%);
    @media (max-width: 743px) {
        vertical-align: middle;
    }
   
`
export const Styled = {
    Section, 
    Icons
}

