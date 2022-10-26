import LayoutComponent from "../../Layout";
import { Button, Card, Main, Title, MainCardContainer, Component, CardBackground, CardContainer, BlankSpace } from './styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProjectsComponent = () => {
  return (
    <>
      <LayoutComponent title="Proyectos">
        <Component>
        <Main>
          <Title>
            <h3 className="title">PORTAFOLIO DE PROYECTOS</h3>
            <p className="subtitle">Nuestros proyectos mas recientes</p>
          </Title>
          <Button>
            <div className="more">VER MÁS</div>
          </Button>
        </Main>
        <BlankSpace>

        </BlankSpace>
        <MainCardContainer>
          <CardContainer>
            <Card>
                
            </Card>
            <h4 className="name">
                Proyecto Uno
            </h4>
            <p className="about">
                Conocer más<ArrowForwardIcon></ArrowForwardIcon>
            </p>

          </CardContainer>
          <CardContainer>
            <Card>
                
            </Card>
            <h4 className="name">
                Proyecto Dos
            </h4>
            <p className="about">
                Conocer más<ArrowForwardIcon></ArrowForwardIcon>
            </p>

          </CardContainer>
          <CardContainer>
            <Card>
                
            </Card>
            <h4 className="name">
                Proyecto Tres
            </h4>
            <p className="about">
                Conocer más<ArrowForwardIcon></ArrowForwardIcon>
            </p>

          </CardContainer>
          <CardContainer>
            <Card>
                
            </Card>
            <h4 className="name">
                Proyecto Cuatro
            </h4>
            <p className="about">
                Conocer más<ArrowForwardIcon></ArrowForwardIcon>
            </p>

          </CardContainer>
          
        </MainCardContainer>
        <CardBackground>

          </CardBackground>
        </Component>
      </LayoutComponent>
    </>
  );
};
export default ProjectsComponent;
