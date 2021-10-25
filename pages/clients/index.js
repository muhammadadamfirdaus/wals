import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import Layout from "../../components/Layout";

export default function Clients() {
	return (
		<Layout title="Klien PT WALS.">
			<div className="content">
				<div className="wrapper">
					<figure className={styles.featuredImage}>
						<h1 className={styles.title}>Clients</h1>
						<Image
							src="/images/headline.jpg"
							layout="fill"
							objectFit="cover"
							alt="Klien PT WALS."
						/>
					</figure>
					<Container className="mb-4">
						<Row>
							<h1 className="title">Berbagai Mitra Kami</h1>
						</Row>
						<Row>
							<Col md={3}>
								<Image
									src="/images/clients/bek.jpg"
									width="200"
									height="100"
									alt="BEK Logo."
								/>
							</Col>
							<Col md={3}>
								<Image
									src="/images/clients/big.jpg"
									width="88"
									height="100"
									alt="BEK Logo."
								/>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</Layout>
	);
}
