import Link from 'next/link';
import {
  Header,
  ItemContact,
  ItemMenu,
  MarkSpace,
  Navigation,
  Title,
} from "./styles";

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <MarkSpace>
          <img src="/static/img/home/logo_color.png" className='logo'></img>
          <Title>Tecnidev</Title>
        </MarkSpace>

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
          <ItemContact>CONTACTO</ItemContact>
        </Navigation>
      </Header>
    </>
  );
};

export default HeaderComponent;
