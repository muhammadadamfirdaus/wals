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

export default function Header() {
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
							<span>Survey &amp; Engineering</span>
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
							<Nav>
								<Link href="/" passHref>
									<Nav.Link>Home</Nav.Link>
								</Link>
								<Link href="/about" passHref>
									<Nav.Link>Tentang Kami</Nav.Link>
								</Link>
								<Dropdown as={NavItem} id="collasible-nav-dropdown">
									<Dropdown.Toggle as={NavLink}>Produk</Dropdown.Toggle>
									<Dropdown.Menu>
										<Link href="/products/survey-pemetaan-wilayah" passHref>
											<Dropdown.Item>Survey Pemetaan Wilayah</Dropdown.Item>
										</Link>
										<Link href="/products/pemetaan-pertambangan" passHref>
											<Dropdown.Item>Pemetaan Pertambangan</Dropdown.Item>
										</Link>
										<Link href="/products/survey-pemetaan-konstruksi" passHref>
											<Dropdown.Item>Survey Pemetaan Konstruksi</Dropdown.Item>
										</Link>
									</Dropdown.Menu>
								</Dropdown>
								<Link href="/contacts" passHref>
									<Nav.Link>Kontak</Nav.Link>
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Row>
			</Container>
		</header>
	);
}
