import LayoutComponent from "../../Layout";
import { Left, Left2, Right, WrapperStyles, Left3, Right2, WrapperStyles2 } from './styles';

const AboutComponent = () => {
  return (
    <>
      <LayoutComponent title="Nosotros">
        <WrapperStyles>
          <Left></Left>
          <Right>
            <h3 className="title">Quienes somos</h3>
            <p className="content">
              Tecnidev es una organización enfocada en impulsar a las pequeñas y
              medianas empresas del sector mediante herramientas tecnológicas y
              de las TIC, lograr que por medio de desarrollos tecnológicos sean
              vistos por más personas en el mundo digital y aso poder llegarle a
              mayor número de clientes aumentando así su margen de ganancias.
              <br />
              nos esforzamos en contribuir con el crecimiento de pequeñas
              empresas a través del desarrollo de servicios tecnológicos
              potenciado su área de tecnología que les permita fortalecer su
              Core de negocio en el mercado
              <br />
              desarrollamos sistemas y páginas web hechos a la medida según las
              necesidades del cliente. En los que sobresalen paginas web
              estaticas, dinamicas, software de utilidad empresarial y
              aplicativos moviles
            </p>
          </Right>
        </WrapperStyles>

        <WrapperStyles2>
          <Right>
            <h3 className="title">Mision</h3>
            <p className="content">
              Contribuir con el crecimiento de pequeñas empresas a través del
              desarrollo de servicios tecnológicos potenciado su área de
              tecnología que les permita fortalecer su Core de negocio en el
              mercado
            </p>
            <br />
            <br />
            <h3 className="title">Vision</h3>
            <p className="content">
              Posicionarnos en 5 años como una compañía que promueve y apoya a
              las pymes a nivel nacional con nuestros servicios tecnológicos,
              ágiles, seguros e innovadores.
            </p>
          </Right>

          <Left2></Left2>
        </WrapperStyles2>

        <WrapperStyles>
          <Left3></Left3>
          <Right2>
            <h3 className="title">Objetivos</h3>
            <p className="content">
              <ul>
                <li>
                  
                  Desarrollar sistemas a la medida según las necesidades del
                  cliente
                </li>
                <li>
                  Generar fidelización de clientes con el paso del tiempo{" "}
                </li>
                <li>Ganar nombre y peso entre el mercado de desarrollo</li>
                <li>Aumentar el número de clientes según las métricas</li>
                <li>
                  Lograr digitalizar emprendimientos ahorrando así costos dentro
                  de si mismas
                </li>
                <li>
                  Aumentar el personal para optimizar proyectos y poder sobre
                  llevar las a la vez
                </li>
              </ul>
            </p>
          </Right2>
        </WrapperStyles>
      </LayoutComponent>
    </>
  );
};
export default AboutComponent;
