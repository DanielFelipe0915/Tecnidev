import LayoutComponent from "../../Layout";
import { Left, Right, WrapperStyles } from "./styles";

const AboutComponent = () => {
  return (
    <>
      <LayoutComponent title="Nosotros">
        <WrapperStyles>
          <Left></Left>
          <Right>
            <h3 className="title">Quienes somos</h3>
            <p className="content">
            Tecnidev es una organización enfocada en impulsar a las pequeñas y medianas empresas del sector mediante herramientas tecnológicas y de las TIC, lograr que por medio de desarrollos tecnológicos sean vistos por más personas en el mundo digital y aso poder llegarle a mayor número de clientes aumentando así su margen de ganancias.
            <br/>
            nos esforzamos en contribuir con el crecimiento de pequeñas empresas a través del desarrollo de servicios tecnológicos potenciado su área de tecnología que les permita fortalecer su Core de negocio en el mercado
            <br/>
            desarrollamos sistemas y páginas web hechos a la medida según las necesidades del cliente. En los que sobresalen paginas web estaticas, dinamicas, software de utilidad empresarial y aplicativos moviles
            </p>

          </Right>
        </WrapperStyles>
      </LayoutComponent>
    </>
  );
};
export default AboutComponent;
