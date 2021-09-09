import styles from "../../styles/scss/FeaturedImage.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";

function Product({ service }) {
	console.log(service);
	return (
		<Layout>
			<Header />
			<div className="content">
				<div className="wrapper">
					<figure className={styles.featuredImage}>
						<h1 className={styles.title}>{service.title}</h1>
						<Image
							src={service.image}
							layout="fill"
							objectFit="cover"
							alt={service.description}
						/>
					</figure>
					<Container>
						<Row>
							<p>{service.description}</p>
						</Row>
						<Row>
							{/* <h1 className="title">Lihat Juga Jasa Lainnya</h1> */}
						</Row>
					</Container>
				</div>
			</div>
			<Footer />
		</Layout>
	);
}

export default Product;

export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/api/products/${slug}`);
	const services = await res.json();
	console.log(services);
	return {
		props: {
			service: services[0],
		},
	};
}
