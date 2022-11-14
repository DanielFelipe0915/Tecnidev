import { styled } from "@mui/material";
import { getMaxBreakPoint } from "../../../utils/StyledUtil";

export const Main = styled("div")`
width: 100%;
`;

export const Image = styled("div")`
height: calc(100vh);
background-image: url("/static/img/home/component1.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items:center;
& .logo{
  width: 16%;
  padding-top: 4em;
}

& .title{
  color:#FFF;
  font-size: 6.5rem;
 margin:1rem auto ;
 font-family: "Roboto",sans-serif;
 @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  font-size:2rem;
}
}

& .subtitle{
  color:#FFF;
 margin: 0.7em 0 0 0;
 font-size: 1.2rem;
 @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  font-size: 0.9rem;
  margin: 0 1.8rem;
}
 letter-spacing: 1.6pt;
 font-weight: 300;
 font-family: "Roboto",sans-serif;
}
`;

export const More = styled("div")`
background-color: ${({ theme }) => theme.palette.primary.main};
color: #fff;
display: flex;
justify-content: center;
align-items: center;
margin-top: 3rem;
padding: 0.6rem 2.3rem;
font-size: 2em;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  font-size: 1.2rem;
}
border:solid 1px;
border-color: ${({ theme }) => theme.palette.primary.main};
&:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: #fff;
    transition: all 0.4s;
    border-color:#FFF;
    cursor: pointer;
    
  }
`;

export const CardContainer = styled("div")`
margin-top:4rem;
width: 100%;
position: relative;
display: flex;
justify-content: space-evenly;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  flex-direction: column;
  width: auto;
  margin-top: 0;
}
`;



export const Card = styled("div")`
width: 383px;
height: 285px;
display: flex;
flex-direction: column;
padding-left: 2rem;
padding-right: 2rem;
color: #FFF;
align-items: center;
background: rgba(63, 92, 110, 0.97);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 13px;
text-align: center;
font-weight: 100;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  width: 250px;
  height: 210px;
  margin: 1rem 0;
  font-size: 0.9rem;
}

& .logo{
  width: 30%;
  padding-top: 1rem;
}
& .resume{
  margin-top: 0.5rem;  

}
& .valName{
  font-size: 2.1em;
  @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
    font-size: 1.5em;
}
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
&:hover{
  transition:all 0.2s;
  transform: scale(1.3);
}
`;

export const FFFSpace = styled("div")`
background-color: #fff;
  width: 100%;
  height: 28vh;
`;


