import { styled } from '@mui/material';
import { getMaxBreakPoint } from '../../../utils/StyledUtil';

export const WrapperStyles=styled('div')`
display: flex;
box-sizing: border-box;
width: 100%;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  flex-direction: column;
}
`

export const WrapperStyles2=styled('div')`
display: flex;
box-sizing: border-box;
width: 100%;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  flex-direction:column-reverse;
}
`

export const Left=styled('div')`
width: 50%;
height: calc(90vh);
background-image: url("/static/img/about/Rectangle.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  width:100%;
  height: calc(40vh);
}
`

export const Right=styled('div')`
width: 50%;
background: ${({theme})=>theme.palette.primary.main};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color:#FFF;
padding: 0 8rem;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  width:100%;
  padding: 0 2rem;
}
& .title{
    font-size: 3em;
   margin-top: 0;
   @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  margin-top: 0.5rem;
  font-size: 2em;
}
}
& .content{
    line-height:2.3rem;
    @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  font-size: 0.8em;
}
}
`

export const Left2=styled('div')`
width: 50%;
height: calc(90vh);
background-image: url("/static/img/about/tecnologia.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  width:100%;
  height: calc(40vh);
}
`


export const Left3=styled('div')`
width: 50%;
height: calc(90vh);
background-image: url("/static/img/about/robot.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  width:100%;
  height: calc(40vh);
}
`


export const Right2=styled('div')`
width: 50%;
background: ${({theme})=>theme.palette.primary.main};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:#FFF;
padding: 0 8rem;
@media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  width:100%;
  padding: 0 2rem;
}
& .title{
    font-size: 3em;
   margin-top: 0;
   @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  margin-top: 0.5rem;
  font-size: 2em;
}
}
& .content{
    line-height:2.3rem;
    @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
  font-size: 0.8em;
}
}
`