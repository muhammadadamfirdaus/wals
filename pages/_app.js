import { SSRProvider } from "@react-aria/ssr";
import { API_URL } from "../config";
import ContextWrapper from "../context/ContextWrapper";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/scss/custom.scss";
function MyApp({ Component, pageProps, services }) {
	// console.log(services);
	return (
		<SSRProvider>
			<ContextWrapper services={services}>
				<Component {...pageProps} />
			</ContextWrapper>
		</SSRProvider>
	);
}

// jasa kami
MyApp.getInitialProps = async () => {
	const res = await fetch(`${API_URL}/api/services`, {
		headers: {
			// update with your user-agent
			"User-Agent":
				"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
			Accept: "application/json; charset=UTF-8",
		},
	});
	const services = await res.json();

	return {
		services,
	};
};

export default MyApp;
