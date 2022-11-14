import Link from 'next/link';
import {
  Header,
  ItemContact,
  ItemMenu,
  MarkSpace,
  Navigation,
  Title,
  MenuBar, MenuDesktop, TradeMark, ButtonSpace, MenuI
} from "./styles";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Header>
        <MarkSpace>
          <img src="/static/img/home/logo_color.png" className='logo'></img>
          <Title>Tecnidev</Title>
        </MarkSpace>
       
        <MenuBar>
          <ButtonSpace>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon className="menuIcon" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link href="/">
            <MenuI><MenuItem onClick={handleClose}><HomeIcon className="icon"/>INICIO</MenuItem></MenuI>
            </Link>
            <Link href="/projects">
            <MenuI> <MenuItem onClick={handleClose}><FolderCopyIcon className="icon"/>PROYECTOS</MenuItem></MenuI>
            </Link>
            <Link href="/plans">
            <MenuI> <MenuItem onClick={handleClose}><ElectricalServicesIcon className="icon"/>SERVICIOS</MenuItem></MenuI>
            </Link>
            <Link href="/about">
            <MenuI> <MenuItem onClick={handleClose}><ContactPageIcon className="icon"/>NOSOTROS</MenuItem></MenuI>
            </Link>
          </Menu>
          </ButtonSpace>
        </MenuBar>
        <MenuDesktop>

        <Navigation>
          <Link href="/">
          <ItemMenu>INICIO</ItemMenu>
          </Link>
          <Link href="/projects">
          <ItemMenu>PROYECTOS</ItemMenu>
          </Link>
          <Link href="/plans">
          <ItemMenu>SERVICIOS</ItemMenu>
          </Link>
          <Link href="/about">
          <ItemContact>NOSOTROS</ItemContact>
          </Link>
        </Navigation>
        </MenuDesktop>
      </Header>
    </>
  );
};

export default HeaderComponent;
