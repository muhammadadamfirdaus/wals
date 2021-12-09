import { SSRProvider } from "@react-aria/ssr";
import { API_URL } from "../config";
import ContextWrapper from "../context/ContextWrapper";
import { appWithTranslation } from "next-i18next";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/scss/custom.scss";

function MyApp({ Component, pageProps, services, products }) {
  // console.log(products);
  return (
    <SSRProvider>
      <ContextWrapper services={services} products={products}>
        <Component {...pageProps} />
      </ContextWrapper>
    </SSRProvider>
  );
}

// jasa kami
MyApp.getInitialProps = async ({ locale }) => {
  const resProducts = await fetch(`${API_URL}/products?_locale=${locale}`, {
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const resServices = await fetch(`${API_URL}/services?_locale=${locale}`, {
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const products = await resProducts.json();
  const services = await resServices.json();

  return {
    products,
    services,
  };
};

export default appWithTranslation(MyApp);
