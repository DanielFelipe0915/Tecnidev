import { styled } from "@mui/material";
import { getMaxBreakPoint } from "../../../utils/StyledUtil";

export const Main = styled("div")`
  width: 100%;
  height: 100vh;
  background-image: url("/static/img/plans/fondo_plans.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Information = styled("div")`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 1.9em;
  @media (max-width: ${({ theme }) => getMaxBreakPoint(theme, "sm")}) {
    font-size: 1.5em;
  }
  & .subtitle {
    font-weight: 100;
    font-size: 0.6em;
  }
  & .lineCont {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .line {
    width: 3%;
    margin: 1rem 1rem 4rem;
    border: 3px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: ${({ theme }) => getMaxBreakPoint(theme, "sm")}) {
      width: 10%;
    }
  }
`;

export const CardContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => getMaxBreakPoint(theme, "sm")}) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
`;

export const Card = styled("div")`
  width: 18%;
  @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
    width: 90%;
    margin: 0.5rem auto;
    padding: 0.2rem 1rem ;
}
  margin: 0 2rem;
  aspect-ratio: 1/1.25;
  background-color: ${({ theme }) => theme.palette.customColor[700]};
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  & .cardTitle {
    margin-top: 2rem;
    font-weight: 700;
    @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
      margin-top: 1rem;
      font-size: 1em;
}
  }
  & .cardContent {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
      margin-top: 1rem;
      font-size: 0.8em;
}
  }
  & .movil {
    margin-top: 4rem;
    @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
      margin-top: 1rem;
      font-size: 0.8em;
}
  }
`;
