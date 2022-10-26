import { styled } from "@mui/material";

export const Header = styled("div")`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`;

export const MarkSpace = styled("div")`
  align-items: center;
  display: flex;
  padding-left: 3rem;
  
  & .logo{
    width: 15%;
    cursor: pointer;
  }
`;

export const Navigation = styled("div")`
  width: 80%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 2.5rem;
  
`;

export const ItemMenu = styled("div")`
  background-color: #fff;
  font-size: 1.3rem;
  margin: 0 1.1rem;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 0.8em;
  &:hover {
    cursor: pointer;
    transition: all 0.4s;
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: #fff;
  }
`;
export const ItemContact = styled("div")`
  color: #fff;
  font-size: 1.3rem;
  margin: 0 1.2rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 0.8em;
  border: solid 1px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: #fff;
    transition: all 0.4s;
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const Title = styled("p")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  margin:2rem 0 ;
`;
