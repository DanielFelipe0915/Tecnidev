import LayoutComponent from "../../Layout";
import { Card, CardContainer, Information, Main } from "./styles";

const PlansComponent = () => {
  return (
    <>
      <LayoutComponent title="Servicios">
        <Main>
          <Information>
            <h3 className="title">
              NUESTROS PLANES
            </h3>
            <h5 className="subtitle">
              A continuacion encontraras los planes que tenemos disonibles para tu empresa
            </h5>
            <div className="lineCont">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </Information>
          <CardContainer>

            <Card>
              <h2 className="cardTitle">
                PAGINA WEB ESTATICA
              </h2>
              <p className="cardContent">
                Ideal para empresas pequeñas que quieren exponer su catalogo y llegar a más publico
              </p>
            </Card>
            <Card>
              <h2 className="cardTitle">
                PAGINA WEB DINAMICA
              </h2>
              <p className="cardContent">
                La mejor alternativa para empresas que quieren establecer negocios virtuales y emprender en el E-Commerce
              </p>
            </Card>
            <Card>
              <h2 className="cardTitle">
                SISTEMAS DE UTILIDAD
              </h2>
              <p className="cardContent">
                Sistemas de inventarios, agendamiento automatico y muchos mas servicios a la medida de utilidad para la productividad de tu empresa
              </p>
            </Card>
            <Card>
              <h2 className="cardTitle">
                APLICACIÓN MOVIL
              </h2>
              <p className="cardContent movil">
                Aplicacion que puede estar en el bolsillo de todos tus clientes
              </p>
            </Card>

          </CardContainer>

        </Main>
        
      </LayoutComponent>
    </>
  );
};
export default PlansComponent;
