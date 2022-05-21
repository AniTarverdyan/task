import styled from 'styled-components';

const HeaderContent = styled.header`
   min-height: 194px;
   width: 100%;
   text-align: center;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   flex: 0;
   `
const Title = styled.h2`
   font-weight: 400;
   font-size: 48px;
   width: 191px;
   height: 59px;
   font-family: Montserrat;
   line-height: 58.51px;
   margin: 0 0 0 99px;  
   @media (max-width: 743px) {
      padding: 21px;
      padding-bottom: 0;
      margin: 0;
   }
   `
const ActionButtons = styled.div`
    display: flex;
    margin: 0 90px 0 0;

    @media (max-width: 743px) {
       padding: 20px;
   }
   `
const FilterItem = styled.div`
height: 29px;
margin: 14px;
font-size: 24px;
color: #CBB1A2;
line-height: 29.26px;
font-weight: 700;
font-family: Montserrat;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
&::after {
         display: inline-block;
         flex: 0;
         content: '';
         width: 30px;
         min-height: 4px;
         margin-top: 5px;
      }
   &.active {
      color: #6749A5;
    &::after {
      background-color: #6749A5;

    }
   }   
 `
export const Styled = {
   HeaderContent,
   Title,
   ActionButtons,
   FilterItem
}


