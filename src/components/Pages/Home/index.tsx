import Link from "next/link";
import LayoutComponent from "../../Layout";
import { Card, CardContainer, FFFSpace, Image, Main, More } from './styles';



const HomeComponent= () => {
  
  return (
    <>
    <LayoutComponent title="Inicio">
      <Main>
        <Image>
          <img src="/static/img/home/logo.png" className="logo"/>
          <h3 className="title">TECNIDEV</h3>
          <p className="subtitle">La ayuda que quieres a un costo más bajo y con la calidad que necesitas.</p>
          <Link href="/about">
         <More>
          Saber Más
         </More>
         </Link>
          <CardContainer>
            <Card>
              <img  className="logo" src="/static/img/home/confiabilidad.png"/>
              <h5 className="valName">Confiabilidad</h5>
              <p className="resume">Comprometidos con nuestros clientes
              </p>
            </Card>
            <Card>
            <img  className="logo" src="/static/img/home/responsabilidad.png"/>
            <h5 className="valName">Responsabilidad</h5>
              <p className="resume">Dedicados a entregar productos de la mejor calidad
              </p>
            </Card>
            <Card>
            <img  className="logo" src="/static/img/home/seguridad.png"/>
            <h5 className="valName">Seguridad</h5>
              <p className="resume">
              Brindamos soluciones de software a la medida para tu empresa
              </p>
            </Card>
          </CardContainer>
          
        </Image>
        <FFFSpace>

        </FFFSpace>
        
        
      </Main>

      

      
    </LayoutComponent>
    </>
  );
};

export default HomeComponent;
