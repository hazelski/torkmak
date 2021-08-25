/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Tel. (14) 98232-2108 | (16) 99765-8524 | Email comercial@torkmak.com.br 
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Copyright {" "}
            <a
              href="#"
              target="_blank"
            >
              Hazelski
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
