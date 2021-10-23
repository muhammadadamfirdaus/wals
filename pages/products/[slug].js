import { API_URL } from "../../config";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import { Container, Row } from "react-bootstrap";

function Product({ product }) {
	console.log(product);
	return (
		<Layout>
			<div className="content">
				<div className="wrapper">
					<figure className={styles.featuredImage}>
						<h1 className={styles.title}>{product.title}</h1>
						<Image
							src={product.image}
							layout="fill"
							objectFit="cover"
							alt={product.description}
						/>
					</figure>
					<Container>
						<Row>
							<p>{product.description}</p>
						</Row>
						<Row>
							{/* <h1 className="title">Lihat Juga Jasa Lainnya</h1> */}
						</Row>
					</Container>
				</div>
			</div>
		</Layout>
	);
}

export default Product;

export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/api/products/${slug}`, {
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
