import { useContext } from "react";
import ServiceContext from "../context/ServiceContext";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col } from "react-bootstrap";

import styles from "../styles/scss/Card.module.scss";

export default function OurServices() {
	const { services } = useContext(ServiceContext);
	console.log(services);
	return services.slice(0, 3).map((service) => {
		console.log(service.category);
		// limit description
		let description = service.description;
		if (description.length > 120) {
			description = description.substring(0, 125);
		}
		console.log(service.image_featured.url);
		return service.category ? (
			<Col className="col-md-offset-4" key={service.id}>
				<Card className={styles.card}>
					<div className={styles.thumbnail}>
						<Image
							src={service.image_featured.url}
							layout="fill"
							objectFit="cover"
							// alt={service.description}
						/>
					</div>
					<Card.Body className="d-flex flex-column">
						<Card.Title className={styles.title}>
							<Link href={`/services/${service.slug}`}>{service.title}</Link>
						</Card.Title>
						<Card.Text
							className={styles.description}
							dangerouslySetInnerHTML={{ __html: description }}
						></Card.Text>
						<Button
							variant="primary"
							className="button align-item-center align-self-center"
						>
							<Link href={`/services/${service.slug}`}>Selengkapnya</Link>
						</Button>
					</Card.Body>
				</Card>
			</Col>
		) : null;
	});
}
