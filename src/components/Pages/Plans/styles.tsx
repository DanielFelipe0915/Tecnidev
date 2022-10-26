import { styled } from '@mui/material';


export const Main=styled('div')`
width: 100%;
height: 100vh;
background-image: url("/static/img/plans/fondo_plans.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: center;
`

export const Information= styled('div')`
   width: 100%;
   text-align: center;
   color: #FFF;
   font-size:1.9em;
   & .subtitle{
    font-weight: 100;
    font-size:0.6em;
   }
   & .lineCont{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   & .line{
    width: 3%;
    margin: 1rem 1rem 4rem;
    border: 3px solid #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   }
`;

export const CardContainer= styled('div')`
   width: 100%;
   display: flex;
   justify-content: center;
`;

export const Card= styled('div')`
  width :18% ;
  margin: 0 2rem;
  aspect-ratio: 1/1.25;
  background-color: ${({theme})=>theme.palette.customColor[700]};
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  text-align: center;
  color: ${({theme})=>theme.palette.primary.main};
  & .cardTitle{
    margin-top: 2rem;
    font-weight: 700;
  }
  & .cardContent{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
  & .movil{
    margin-top: 4rem;
  }
`;

