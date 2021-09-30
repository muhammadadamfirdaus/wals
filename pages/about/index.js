import Image from "next/image";
import Layout from "../../components/Layout";
import { Accordion, Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";

export default function About() {
	return (
		<Layout title="Sekilas tentang PT WALS">
			<div className="content">
				<div className="wrapper">
					<figure className={styles.featuredImage}>
						<h1 className={styles.title}>Tentang Kami</h1>
						<Image
							src="/images/headline.jpg"
							layout="fill"
							objectFit="cover"
							alt="Tentang PT WALS."
						/>
					</figure>
					<Container>
						<Row>
							<h1 className="title">Siapa PT WALS</h1>
							<p>
								PT WALS. (Wahyudi Andy Laksito Setiarso) adalah sebuah
								perusahaan jasa konsultansi yang bergerak di bidang survey &
								pemetaan, perencanaan, lingkungan hidup, studi kelayakan potensi
								sumber daya alam dan sumber daya manusia.
							</p>
							<p>
								Sejak didirikan pada tahun 1993, PT WALS telah melakukan banyak
								jasa Konsultasi dengan berbagai macam klien dari Pemerintah dan
								Swasta. Dengan pengalaman yang PT.WALS miliki selama 27 tahun
								dan didukung dengan peralatan terkini dan tenaga ahli yang
								handal, kami yakin dapat memenuhi ekspektasi semua klien kami.
							</p>
						</Row>
						<Row>
							<h1 className="title">FAQ</h1>
							<Accordion defaultActiveKey="0" variant="dark">
								<Accordion.Item eventKey="0">
									<Accordion.Header>
										Bagaimana Cara Mengorder Jasa di PT WALS?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										Bagaimana Cara Mengorder Jasa di PT WALS?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										Bagaimana Cara Mengorder Jasa di PT WALS?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>
										Bagaimana Cara Mengorder Jasa di PT WALS?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Row>
					</Container>
				</div>
			</div>
		</Layout>
	);
}
