import { useContext } from "react";
import ServiceContext from "../context/ServiceContext";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/scss/Header.module.scss";

import {
  Col,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  NavLink,
  Row,
} from "react-bootstrap";
import Menu from "./Menu";

export default function Header() {
  const { services } = useContext(ServiceContext);
  return (
    <header>
      <div className={styles.top}></div>
      <Container fluid="xl" className={styles.middle}>
        <Row>
          <Col className="logo">
            <Link href="/about">
              <a>
                <img src="/logo.jpg" alt="logo PT WALS" />
              </a>
            </Link>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <span>Survey &amp; Engineering Services</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.bottom}>
        <Row>
          <Navbar
            className="menu justify-content-end"
            expand="lg"
            variant="dark"
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Menu />
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
}
