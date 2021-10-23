import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import Layout from "../../components/Layout";

export default function Contact() {
	return (
		<Layout title="Hubungi Kami">
			<div className="content">
				<div className="wrapper">
					<figure className={styles.featuredImage}>
						<h1 className={styles.title}>Kontak</h1>
						<Image
							src="/images/headline.jpg"
							layout="fill"
							objectFit="cover"
							alt="Kontak PT WALS."
						/>
					</figure>
					<Container>
						<Row>
							<h1 className="title">Kontak</h1>
						</Row>
						<Row>
							<p>PT. Wahyudi Andy Laksito Setiarso</p>
							<p>
								Alamat: Rukan Taman Pondok Kelapa, Blok F No. 6, RT 01 / RW 01,
								Jl. Raya Pondok Kelapa, Pondok Kelapa, Duren Sawit, RT.1/RW.1,
								Pd. Kelapa.
							</p>
							<p>
								Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota
								Jakarta 13450
							</p>
							<p>(021) 8649453</p>
						</Row>
					</Container>
				</div>
			</div>
		</Layout>
	);
}
