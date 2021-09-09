import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../styles/scss/Footer.module.scss";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<Container className={styles.container}>
				<Row>
					<Col>
						<h2 className={styles.title}>Survey Pemetaan Wilayah</h2>
						<p>PT WALS - Wahyudi Andy Laksito Setiyarso.</p>
						<p>Jasa konsultan survey dan pemetaan terbaik di Indonesia.</p>
					</Col>
					<Col>
						<h2 className={styles.title}>Produk</h2>
						<ul>
							{/* {service.map((x) => (
								<li key={x.id}>
									<Link href={`/products/${x.slug}`}>
										<a>{x.title}</a>
									</Link>
								</li>
							))} */}
							<li>
								<a>Produk 1</a>
							</li>
							<li>
								<a>Produk 2</a>
							</li>
							<li>
								<a>Produk 3</a>
							</li>
						</ul>
					</Col>
					<Col>
						<h2 className={styles.title}>Kontak</h2>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
