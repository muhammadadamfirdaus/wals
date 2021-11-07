import { API_URL } from "../../config";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import { Button, Container, Col, Row } from "react-bootstrap";

import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

function Product({ product }) {
	const router = useRouter();
	return (
		<Layout>
			<div className="content">
				<div className="wrapper">
					<Container>
						<Button
							variant="secondary"
							className="my-4"
							onClick={() => router.back()}
						>
							Back
						</Button>
						<Row>
							<Col>
								<figure className={styles.featuredImageProduct}>
									<Image
										src={product.image_featured.url}
										layout="fill"
										objectFit="cover"
										alt={product.title}
									/>
								</figure>
							</Col>
							<Col>
								<Row>
									<h1 className={styles.title}>{product.title}</h1>
								</Row>
								<Row>
									<ReactMarkdown>{product.description}</ReactMarkdown>
								</Row>
								<Row>
									{/* <h1 className="title">Lihat Juga Jasa Lainnya</h1> */}
								</Row>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</Layout>
	);
}

export default Product;

export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/products?slug=${slug}`, {
		headers: {
			// update with your user-agent
			"User-Agent":
				"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
			Accept: "application/json; charset=UTF-8",
		},
	});
	const products = await res.json();
	console.log(products);
	return {
		props: {
			product: products[0],
		},
	};
}
