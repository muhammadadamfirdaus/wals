import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurProducts from "../components/OurProducts";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { API_URL } from "../config";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home({ services }) {
	return (
		<Layout>
			<Header />
			<div className="content">
				<div className="wrapper">
					<Swiper
						className="headline"
						// install Swiper modules
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						// spaceBetween={50}
						// slidesPerView={3}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}
						pagination={{ clickable: true }}
						// scrollbar={{ draggable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}
					>
						<div className="swiper-button-next swiper-button-white"></div>
						<div className="swiper-button-prev swiper-button-white"></div>
						<SwiperSlide>
							<div className="content">
								<div className="wrapper">
									<figure>
										<Image src="/images/headline.jpg" layout="fill" alt="" />
									</figure>
									<div className="caption">
										<h1 className="title">Konsultan Survey dan Pemetaan</h1>
										<p>
											Konsultan Survey Pemetaan adalah sebuah perusahaan
											konsultan manajemen dengan fokus pada kemewahan dan
											keindahan. Kami bekerja dengan perspektif operasi
											strategis jangka panjang untuk menempatkan merek klien
											kami di atas.
										</p>
										<Button
											variant="primary"
											className="button align-item-center align-self-center"
										>
											<Link href={`/contacts`}>Hubungi Kami</Link>
										</Button>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="content">
								<div className="wrapper">
									<figure>
										<Image src="/images/headline.jpg" layout="fill" alt="" />
									</figure>
									<div className="caption">
										<h1 className="title">Konsultan Survey dan Pemetaan</h1>
										<p>
											Konsultan Survey Pemetaan adalah sebuah perusahaan
											konsultan manajemen dengan fokus pada kemewahan dan
											keindahan. Kami bekerja dengan perspektif operasi
											strategis jangka panjang untuk menempatkan merek klien
											kami di atas.
										</p>
										<Button
											variant="primary"
											className="button align-item-center align-self-center"
										>
											<Link href={`/contacts`}>Hubungi Kami</Link>
										</Button>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="content">
								<div className="wrapper">
									<figure>
										<Image src="/images/headline.jpg" layout="fill" alt="" />
									</figure>
									<div className="caption">
										<h1 className="title">Konsultan Survey dan Pemetaan</h1>
										<p>
											Konsultan Survey Pemetaan adalah sebuah perusahaan
											konsultan manajemen dengan fokus pada kemewahan dan
											keindahan. Kami bekerja dengan perspektif operasi
											strategis jangka panjang untuk menempatkan merek klien
											kami di atas.
										</p>
										<Button
											variant="primary"
											className="button align-item-center align-self-center"
										>
											<Link href={`/contacts`}>Hubungi Kami</Link>
										</Button>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="content">
								<div className="wrapper">
									<figure>
										<Image src="/images/headline.jpg" layout="fill" alt="" />
									</figure>
									<div className="caption">
										<h1 className="title">Konsultan Survey dan Pemetaan</h1>
										<p>
											Konsultan Survey Pemetaan adalah sebuah perusahaan
											konsultan manajemen dengan fokus pada kemewahan dan
											keindahan. Kami bekerja dengan perspektif operasi
											strategis jangka panjang untuk menempatkan merek klien
											kami di atas.
										</p>
										<Button
											variant="primary"
											className="button align-item-center align-self-center"
										>
											<Link href={`/contacts`}>Hubungi Kami</Link>
										</Button>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className="services">
						<Container fluid="lg" className="py-5">
							<Row>
								<h3 className="title text-center">Jasa Kami</h3>
							</Row>
							<Row>
								{services.map((jasa) => (
									<OurProducts key={jasa.id} service={jasa} />
								))}
							</Row>
						</Container>
					</div>
					<div className="achievements">
						<Container className="py-5">
							<Row>
								<Col>
									<div className="circle">
										<span>270</span>
									</div>
									<span>Proyek</span>
								</Col>
								<Col>
									<div className="circle">
										<span>80</span>
									</div>
									<span>Klien</span>
								</Col>
								<Col>
									<div className="circle">
										<span>176</span>
									</div>
									<span>Penjualan</span>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="about-us">
						<Container className="py-5">
							<Row>
								<h3 className="title text-center">Tentang PT WALS.</h3>
							</Row>
							<Row>
								<Col>
									<h4 className="subheading">Berpengalaman Selama 27 Tahun</h4>
									<p>
										PT WALS. (Wahyudi Andy Laksito Setiarso) adalah sebuah
										perusahaan jasa konsultansi yang bergerak di bidang survey
										&amp; pemetaan, perencanaan, lingkungan hidup, studi
										kelayakan potensi sumber daya alam dan sumber daya manusia.
									</p>
									<p>
										Sejak didirikan pada tahun 1993, PT WALS telah melakukan
										banyak jasa Konsultasi dengan berbagai macam klien dari
										Pemerintah dan Swasta. Dengan pengalaman yang PT.WALS miliki
										selama 27 tahun dan didukung dengan peralatan terkini dan
										tenaga ahli yang handal, kami yakin dapat memenuhi
										ekspektasi semua klien kami.
									</p>
									<Button
										variant="primary"
										className="button align-item-center align-self-center"
									>
										<Link href={`/contacts`}>Hubungi Kami</Link>
									</Button>
								</Col>
								<Col>
									<figure>
										<Image
											src="/images/4.jpg"
											layout="fill"
											objectFit="cover"
											alt="Tentang PT WALS."
										/>
									</figure>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="team">
						<Container className="py-5">
							<Row>
								<h3 className="title text-center">Meet the Team</h3>
							</Row>
							<Row className="chief">
								<Col>
									<figure>
										<Image
											src="/images/5.jpg"
											layout="fill"
											objectFit="cover"
											alt="Tim PT WALS."
										/>
									</figure>
								</Col>
								<Col>
									<figure>
										<Image
											src="/images/5.jpg"
											layout="fill"
											objectFit="cover"
											alt="Tim PT WALS."
										/>
									</figure>
								</Col>
							</Row>
							<Row>
								<h5 className="title text-center">Tenaga Ahli</h5>
							</Row>
							<Row className="specialist">
								<Col md="3">
									<figure>
										<Image
											src="/images/5.jpg"
											layout="fill"
											objectFit="cover"
											alt="Tim PT WALS."
										/>
									</figure>
								</Col>
								<Col md="3">
									<figure>
										<Image
											src="/images/5.jpg"
											layout="fill"
											objectFit="cover"
											alt="Tim PT WALS."
										/>
									</figure>
								</Col>
								<Col md="3">
									<figure>
										<Image
											src="/images/5.jpg"
											layout="fill"
											objectFit="cover"
											alt="Tim PT WALS."
										/>
									</figure>
								</Col>
								<Col md="3">
									<figure>
										<Image
											src="/images/5.jpg"
											layout="fill"
											objectFit="cover"
											alt="Tim PT WALS."
										/>
									</figure>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="blog">
						<Container className="py-5">
							<Row>
								<h3 className="title text-center">Blog</h3>
							</Row>
							<Row>
								<Col md={4}>
									<iframe
										src="https://www.youtube.com/embed/oGnzP_wFjkU"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</Col>
								<Col md={4}>
									<iframe
										src="https://www.youtube.com/embed/oGnzP_wFjkU"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</Col>
								<Col md={4}>
									<iframe
										src="https://www.youtube.com/embed/oGnzP_wFjkU"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	);
}

// jasa kami
export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/products`);
	const services = await res.json();

	return {
		props: { services },
		revalidate: 1,
	};
}
