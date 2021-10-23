import { useContext } from "react";
import ServiceContext from "../context/ServiceContext";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../styles/scss/Footer.module.scss";

export default function Footer() {
	const { services } = useContext(ServiceContext);
	return (
		<div className={styles.footer}>
			<Container className={styles.container}>
				<Row>
					<Col>
						<h2 className={styles.title}>About</h2>
						<h4 className={styles.subtitle}>
							PT WALS - Wahyudi Andy Laksito Setiyarso
						</h4>
						<p>Jasa konsultan survey dan pemetaan terbaik di Indonesia.</p>
						<div className={styles.address}>
							<p>Rukan Taman Pondok Kelapa, Blok F No. 6,</p>
							<p>Pondok Kelapa, Duren Sawit,</p>
							<p>Jakarta Timur</p>
						</div>
					</Col>
					<Col>
						<h2 className={styles.title}>Services</h2>
						<ul className={styles.list}>
							{services.map((x) => {
								// limit title by 3 words
								let title = x.title;
								if (title) {
									title = title.split(" ").splice(0, 3).join(" ");
								}
								return (
									<li key={x.id}>
										<p>
											<Link href={`/products/${x.slug}`}>
												<a>{title}</a>
											</Link>
										</p>
									</li>
								);
							})}
						</ul>
					</Col>
					<Col md={2}>
						<h2 className={styles.title}>Stay Connected</h2>
					</Col>
				</Row>
				<Row className={styles.copyright}>
					<p>Copyright &copy; 2021</p>
				</Row>
			</Container>
		</div>
	);
}
