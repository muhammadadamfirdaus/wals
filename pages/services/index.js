import Image from "next/image";
import Layout from "../../components/Layout";
import { Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";

export default function Services() {
	return (
		<Layout title="Jasa PT WALS.">
			<div className="content">
				<div className="wrapper">
					<figure className={styles.featuredImage}>
						<h1 className={styles.title}>Jasa PT WALS</h1>
						<Image
							src="/images/headline.jpg"
							layout="fill"
							objectFit="cover"
							alt="Jasa PT WALS."
						/>
					</figure>
					<Container>
						<Row>
							<h1 className="title">Jasa PT WALS</h1>
						</Row>
					</Container>
				</div>
			</div>
		</Layout>
	);
}
