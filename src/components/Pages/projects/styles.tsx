import { styled } from "@mui/material";
import { getMaxBreakPoint } from "../../../utils/StyledUtil";

export const Component = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled("div")`
  margin-top: 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Title = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;

  & .title {
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2.6em;
    font-weight: 700;
    @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
      font-size: 1.6em;
}
  }
  & .subtitle {
    margin: 0.8rem 0;
    font-size: 1.3em;
  }
  @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
      font-size: 0.9em;
}
`;

export const Button = styled("div")`
  width: auto;
  padding-right: 3rem;
  
  & .more {
    width: fit-content;
    background-color: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 4rem;
    color: #fff;
    border: solid 1px;
    @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
      font-size: 0.8em;
      padding: 1rem 2rem;
}
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.palette.primary.main};
      background-color: #fff;
      transition: all 0.4s;
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
export const BlankSpace = styled("div")`
  background-color: #fff;
  width: 100%;
  height: 5vh;
  
`;

export const MainCardContainer = styled("div")`
  width: 90%;
  height: 20vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
    grid-template-columns: repeat(1, 1fr);
}
`;
export const CardContainer = styled("div")`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto 2rem;
  & .name {
    margin: 0.5rem 0;
    font-size: 1.6rem;
  }
  & .about {
    margin: 0 0 2rem 0;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
  }
`;

export const Card = styled("div")`
  width: 100%;
  aspect-ratio: 8/6;
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardBackground = styled("div")`
  width: 100%;
  height: 110vh;
  background-color: rgba(63, 92, 110, 0.18);
  @media (max-width: ${({theme})=> getMaxBreakPoint(theme, 'sm')}) {
    height: 130vh;
}
`;
