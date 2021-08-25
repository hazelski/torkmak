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

function Servico() {
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
					<h5 className="title">CALDEIRARIA</h5>
					<h5 className="description">
					  Atua com montagens, soldagens e fabricação de componentes mecânicos, elaboração de vistorias de equipamentos mecânicos, inspeções visuais em componentes construídos em chapas metálicas e em tubulações.
					</h5>
				</Col>
				<Col md="4">
					<h5 className="title">SOLDA QUALIFICADA</h5>
					<h5 className="description">
					  Fornecemos mão de obra de soldadores devidamente qualificados em soldagem p11 p22 solda sanitária com qualificações atualizadas nos processos de soldagem de eletrodo revestido e tig seguindo todas as normas.
					</h5>
				</Col>
				<Col md="4">
					<h5 className="title">PINTURA INDUSTRIAL</h5>
					<h5 className="description">
					  O serviço de pintura industrial visa proteger de agentes de corrosão, equipamentos como tanques, bombas, válvulas, bases, filtros, tubos, conexões, vigas e diversos outros perfis metálicos e esse serviço é utilizado em materiais metálicos como aço ferro, alumínio, ferro fundido e qualquer peça metálica.
					</h5>
				</Col>
			</Row>
			<Row>
			    <Col md="4">
					<h5 className="title">MONTAGEM E MANUTENÇÃO INDUSTRIAL</h5>
					<h5 className="description">
					  Compreende o pacote de serviços de instalação de equipamentos e estruturas metálicas, tubulações e dutos, sistemas de geração, transformação e distribuição de energia elétrica e sistemas de automação industrial, testados e prontos para funcionar.
					</h5>
				</Col>
				<Col md="4">
					<h5 className="title">ELÉTRICA  INDUSTRIAL</h5>
					<h5 className="description">
					  Profissionais altamente treinados e qualificados conforme estabelecidos por normas de segurança de trabalho. Manutenção elétrica preventiva e corretiva em motores, máquinas, equipamentos e instalações industriais, analise de necessidades de troca e regulagem de componentes e aplicação testes de funcionamento. 
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

export default Servico;
