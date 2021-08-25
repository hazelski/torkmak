/*eslint-disable*/
import React from "react";
import {
  Button,
  UncontrolledTooltip,
} from "reactstrap";
// reactstrap components
import { Container } from "reactstrap";
import {Link} from 'react-router-dom'

// core components

function SiganosGroup() {
	const abreInstagram = (event) =>{
		window.open('https://www.instagram.com/torkmak/', '_blank')
	};

	const abreFacebook = (event) =>{
		window.open('https://www.facebook.com/torkmak', '_blank')
	};
  return (
 <div className="button-container">
    <Button className="btn-round" color="info" size="lg">
		Siga-nos
    </Button>

	<Button
	className="btn-round btn-icon"
	color="default"
	id="tooltip340339231"
	size="lg"
	onClick={abreInstagram}
	>
		<i className="fab fa-instagram"></i>
	</Button>
    <UncontrolledTooltip delay={0} target="tooltip340339231">
		Instagram
    </UncontrolledTooltip>

	<Button
	className="btn-round btn-icon"
	color="default"
	id="tooltip32443243"
	size="lg"
	onClick={abreFacebook}
	>
		<i className="fab fa-facebook"></i>
	</Button>
    <UncontrolledTooltip delay={0} target="tooltip32443243">
		Facebook
    </UncontrolledTooltip>
</div>
);
}

export default SiganosGroup;