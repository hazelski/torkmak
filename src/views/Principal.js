import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import SiganosGroup from "components/groups/SiganosGroup.js"

function Principal() {
  const [pills, setPills] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            
			<SiganosGroup />

			<Row>
				<Col md="4">
					<h3 className="title">AMBIENTE LIMPO E ORGANIZADO</h3>
					<h5 className="description">
					  Prezamos pelo mais auto nivel de qualidade e bem estar no ambiente de trabalho, utilizamos as normas do 5S como referência para qualquer serviço.
					</h5>
				</Col>
				<Col md="4">
					<h3 className="title">PROFISSIONAIS QUALIFICADOS</h3>
					<h5 className="description">
					  Profissionais altamente treinados e qualificados conforme estabelecidos por normas de segurança de trabalho.
					</h5>
				</Col>
				<Col md="4">
					<h3 className="title">NORMAS DE SEGURANÇA</h3>
					<h5 className="description">
					  Todos os profissionais possuem treinamento nas principais normas de segurança do trabalho exigidas pela legislação além de treinamentos de qualificação profissional.
					</h5>
				</Col>
			</Row>
			<Row>
				<Col md="4">
					<h3 className="title">NOSSA MISSÃO</h3>
					<h5 className="description">
					  Fornecer sempre o serviço mais qualificado, com o menor tempo e a maior qualidade, com a segurança do colaborador e do negocio do cliente sempre em primeiro lugar.
					</h5>
				</Col>
				<Col md="4">
					<h3 className="title">NOSSA VISÃO</h3>
					<h5 className="description">
					  Atuar em todo território nacional, estar entre os grandes players do setor e oferecer a solução completa em montagem e manutenção.
					</h5>
				</Col>
				<Col md="4">
					<h3 className="title">NOSSOS VALORES</h3>
					<h5 className="description">
					  Cumprir todos os acordos com honestidade, procurar fazer mais que o necessário sempre.
					</h5>
				</Col>
			</Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Principal;
