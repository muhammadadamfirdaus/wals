import { useContext } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  console.log(router);
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
          <Col className="d-flex align-items-center justify-content-end">
            <div className="w-60">
              <div className="px-5">
                <span>Survey &amp; Engineering Services</span>
              </div>
            </div>
            <div className="w-20">
              <div className="px-2">
                <Link
                  href={`/${router.locale === "en" ? "en" : "en"}`}
                  locale={false}
                >
                  <a>
                    <span className="icon-uk">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                      <span className="path4"></span>
                      <span className="path5"></span>
                      <span className="path6"></span>
                      <span className="path7"></span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-20">
              <div className="px-2">
                <Link
                  href={`/${router.locale === "id" ? "id" : "id"}`}
                  locale={false}
                >
                  <a>
                    <span className="icon-id">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </span>
                  </a>
                </Link>
              </div>
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
