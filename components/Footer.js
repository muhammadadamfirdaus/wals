import { useContext } from "react";
import ServiceContext from "../context/ServiceContext";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import styles from "../styles/scss/Footer.module.scss";

export default function Footer() {
	const { products } = useContext(ServiceContext);
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
							{products.map((x) => {
								// limit title by 3 words
								let title = x.title;
								if (title) {
									title = title.split(" ").splice(0, 3).join(" ");
								}
								return (
									<li key={x.id}>
										<Link href={`/products/${x.slug}`}>
											<a>{title}</a>
										</Link>
									</li>
								);
							})}
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
