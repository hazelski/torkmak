import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <Navbar className={"navbar-default fixed-top " + navbarColor} expand="lg">
        <Container>

          <div className="photo-container">
		    <a href="/">
              <img alt="..." src={require("assets/img/torkmak.png")}></img>
			</a>
          </div>

          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              target="_blank"
              id="navbar-brand"
            >
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
			  <NavItem>
				<NavLink to="/servico" tag={Link}>
					  Nosso Servi&ccedil;o
				</NavLink>
			  </NavItem>
			  <NavItem>
                <NavLink to="/fotos" tag={Link}>
                  Fotos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/fale" tag={Link}>
                  Fale conosco
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/torkmak/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Siga-nos no Instagram
                </UncontrolledTooltip>
              </NavItem>
			  <NavItem>
                <NavLink
                  href="https://www.facebook.com/torkmak"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Siga-nos no Facebook
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
