import FooterComponent from "./Footer";
import HeaderComponent from "./Header";
import { Children } from '../Shared/Extra/CubeImage/styles';
import Head from "next/head";
import { Main } from './styles';


interface Props{
  title:string;
  children:any;
  paddingBottom?:number;

}
const LayoutComponent:React.FC<Props> = ({
  title="Tecnidev",
  children,
  paddingBottom
}) => {
  return (
    <>
    <HeaderComponent/>
    <Head>
      <title>{title} - Tecnidev</title>
    </Head>
    {/* <Menu></Menu> */}
    <Main>
      {children}
    </Main>

    <FooterComponent/>
    </>
  );
};

export default LayoutComponent;