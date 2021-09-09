import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/scss/custom.scss";

import { SSRProvider } from "@react-aria/ssr";

function MyApp({ Component, pageProps }) {
	return (
		<SSRProvider>
			<Component {...pageProps} />
		</SSRProvider>
	);
}

export default MyApp;
