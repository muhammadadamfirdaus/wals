import { API_URL } from "../../config";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import { Container, Row } from "react-bootstrap";
import OurServices from "../../components/OurServices";
import ReactMarkdown from "react-markdown";

function Service({ service }) {
	// console.log(service);
	return (
		<Layout>
			<div className="content">
				<div className="wrapper">
					<figure className={styles.featuredImage}>
						<h1 className={styles.title}>{service.title}</h1>
						<Image
							src={service.image_featured.url}
							layout="fill"
							objectFit="cover"
							alt={service.title}
						/>
					</figure>
					<Container>
						<Row>
							<ReactMarkdown>{service.description}</ReactMarkdown>
						</Row>
						<Row>
							<h1 className="title">Lihat Juga Jasa Lainnya</h1>
							<OurServices />
						</Row>
					</Container>
				</div>
			</div>
		</Layout>
	);
}

export default Service;

export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/services?slug=${slug}`, {
		headers: {
			// update with your user-agent
			"User-Agent":
				"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
			Accept: "application/json; charset=UTF-8",
		},
	});
	const services = await res.json();
	console.log(services);
	return {
		props: {
			service: services[0],
		},
	};
}
