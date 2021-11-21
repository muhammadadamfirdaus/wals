import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import Layout from "../../components/Layout";
import GoogleMapReact from "google-map-react";
import Location from "../../components/Location";

export default function Contact() {
  const location = {
    address: "PT WALS",
    lat: -6.238344466725321,
    lng: 106.93589630017277,
  };

  const LocationPin = ({ text }) => <div>{text}</div>;

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
              <div
                className="google-map"
                style={{ height: "500px", width: "100%" }}
              >
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyARIaYFNWcYSTf1UBptR8cN6t5c-k88eFA",
                  }}
                  defaultCenter={location}
                  defaultZoom={17}
                >
                  <Location
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                  />
                </GoogleMapReact>
              </div>
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
