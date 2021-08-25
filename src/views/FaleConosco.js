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
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import SiganosGroup from "components/groups/SiganosGroup.js"
import axios from "axios";
import { useHistory } from "react-router-dom";

function FaleConosco() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const history = useHistory()
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

  const sentEmail = (event) => {
    var data = {
      service_id: 'service_n236ezd',
      template_id: 'template_xzf2pca',
      user_id: 'user_s1Ks2LzzIMyRueXZS60sN',
      template_params: {
        'contact_name': nome,
		'contact_email': email,
		'contact_mesage': mensagem
      }
    };

	axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
	.then(function (response) {
      console.log('Success: ', response);
	  history.push("/");
    }).catch(function (error) {
      console.log('Error: ', error);
    });
	
	event.preventDefault();

  }

  return (
    <>
      <ExamplesNavbar />

      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
		   
            <SiganosGroup />

			<h2 className="title">Fale Conosco</h2>
            <p className="description">Entraremos em contato.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input name="nome_form"
                    placeholder="Seu nome..."
                    type="text"
					onChange={e => setNome(e.target.value)}
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input name="email_form"
                    placeholder="Seu email..."
                    type="email"
					onChange={e => setEmail(e.target.value)}
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input name = "mensagem_form"
                    cols="80"
                    name="name"
                    placeholder="Deixe sua mensagem..."
                    rows="4"
                    type="textarea"
					onChange={e => setMensagem(e.target.value)}
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={sentEmail}
                    size="lg"
                  >
                    Enviar
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default FaleConosco;
