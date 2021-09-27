import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

export default function Products() {
	return (
		<Layout title="Jasa PT WALS.">
			<Header />
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
			<Footer />
		</Layout>
	);
}
