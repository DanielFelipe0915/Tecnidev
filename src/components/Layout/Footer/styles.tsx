import { styled } from "@mui/material";

export const Footer = styled('div')`
  width: 100%;
  height: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:#FFF;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;


