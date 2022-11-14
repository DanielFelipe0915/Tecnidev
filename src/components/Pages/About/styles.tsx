import { styled } from '@mui/material';

export const WrapperStyles=styled('div')`
display: flex;
box-sizing: border-box;
width: 100%;
`

export const Left=styled('div')`
width: 50%;
height: calc(90vh);
background-image: url("/static/img/about/Rectangle.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
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
& .title{
    font-size: 3em;
   margin-top: 0;
}
& .content{
    line-height:2.3rem;
}
`

export const Left2=styled('div')`
width: 50%;
height: calc(90vh);
background-image: url("/static/img/about/tecnologia.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`


export const Left3=styled('div')`
width: 50%;
height: calc(90vh);
background-image: url("/static/img/about/robot.png");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
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
& .title{
    font-size: 3em;
   margin-top: 0;
}
& .content{
    line-height:2.3rem;
}
`