import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col } from "react-bootstrap";

export default function Hero({ slides }) {
	console.log(slides);
	// limit description
	let description = slides.description;
	if (description.length > 120) {
		description = description.substring(0, 120);
	}
	return (
		<div className="content">
			<div className="wrapper">
				<figure>
					<Image src={slides.image_slide.url} layout="fill" alt="" />
				</figure>
				<div className="caption md-3">
					<h1 className="title">{slides.title}</h1>
					<p>{description}</p>
					<Button
						variant="primary"
						className="button align-item-center align-self-center"
					>
						<Link href={`/contacts`}>Hubungi Kami</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
