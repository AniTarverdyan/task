import styled from 'styled-components';

export const HeaderContent = styled.header`
   height: 195px;
   width: 100%;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: space-between;
   `
export const Title = styled.h2 `
   font-weight: 400;
   font-size: 48px;
   width: 191px;
   height: 59px;
   font: Montserrat;
   line height: 58.51px;
   margin: 0 0 0 60px
   `   
export const Items = styled.div `
    display: flex;
    margin: 0 60px 0 0;
   `
export const Button = styled.a `
   margin: 14px;
   font-size: 24px;
   color: #CBB1A2;
   line-height: 29.26px;
   font-weight: 700;
   font: Montserrat;
   cursor: pointer;
&>a.active {
         text-decoration: underline;
         text-decoration-color: #6749A5;
         color: #6749A5;
      }
 `    



