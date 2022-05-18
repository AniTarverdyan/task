import styled from 'styled-components';

export const HeaderContent = styled.header`
   min-height: 194px;
   width: 100%;
   text-align: center;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   flex: 0;
   `
export const Title = styled.h2 `
   font-weight: 400;
   font-size: 48px;
   width: 191px;
   height: 59px;
   font: Montserrat;
   line-height: 58.51px;
   margin: 0 0 0 99px;  
   @media (max-width: 743px) {
      padding: 21px;
      padding-bottom: 0;
      margin: 0;
   }
   `   
export const Items = styled.div `
    display: flex;
    margin: 0 60px 0 0;

    @media (max-width: 743px) {
       padding: 20px;
   }
   `
export const NavItem = styled.a `
width: 99px;
height: 29px;
margin: 14px;
font-size: 24px;
color: #CBB1A2;
line-height: 29.26px;
font-weight: 700;
font: Montserrat;
cursor: pointer;
   &>a {
      text-decoration: none;

}
   &>a.active {
      color: #6749A5;
      text-align:center;
      text-decoration: none;
   &>span     {
            background-color: #6749A5;
            width: 40px;
            height: 4px;
            margin: auto;
            display: block;
            margin-top: 10px;
        }
      }   
 `    



