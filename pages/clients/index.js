import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

export default function Clients({ clients }) {
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
							{clients.map((client) => (
								<Col md={3} key={client.id}>
									<Image
										src={client.image_featured.url}
										width="200"
										height="100"
										alt={`"${client.title} Logo."`}
									/>
								</Col>
							))}
						</Row>
					</Container>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/clients`, {
		headers: {
			// update with your user-agent
			"User-Agent":
				"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
			Accept: "application/json; charset=UTF-8",
		},
	});
	const clients = await res.json();
	console.log(clients);
	return {
		props: {
			clients,
		},
	};
}
