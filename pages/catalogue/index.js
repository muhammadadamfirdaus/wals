import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../../components/Layout";
import { Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";

import OurProducts from "../../components/OurProducts";

export default function Catalogue() {
  const { t } = useTranslation("common");
  return (
    <Layout title="Jasa PT WALS.">
      <div className="content">
        <div className="wrapper">
          <figure className={styles.featuredImage}>
            <h1 className={styles.title}>Product Catalogue</h1>
            <Image
              src="/images/headline.jpg"
              layout="fill"
              objectFit="cover"
              alt="Jasa PT WALS."
            />
          </figure>
          <Container>
            <Row>
              <h1 className="title">Product Catalogue</h1>
            </Row>
            <Row>
              <OurProducts />
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["common"]),
  },
});
