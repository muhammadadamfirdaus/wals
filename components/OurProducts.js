import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col } from "react-bootstrap";

import styles from "../styles/scss/Card.module.scss";

export default function OurProducts({ service }) {
	// limit description
	let description = service.description;
	if (description.length > 120) {
		description = description.substring(0, 120);
	}
	return (
		<Col className="col-md-offset-4">
			<Card className={styles.card}>
				<div className={styles.thumbnail}>
					<Image
						src={service.image}
						layout="fill"
						objectFit="cover"
						alt={service.description}
					/>
				</div>
				<Card.Body className="d-flex flex-column">
					<Card.Title className={styles.title}>
						<Link href={`/products/${service.slug}`}>{service.title}</Link>
					</Card.Title>
					<Card.Text className={styles.description}>{description}</Card.Text>
					<Button
						variant="primary"
						className="button align-item-center align-self-center"
					>
						<Link href={`/products/${service.slug}`}>Selengkapnya</Link>
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}
