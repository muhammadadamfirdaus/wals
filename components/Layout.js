import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ title, keywords, description, children }) {
	const url = useRouter();

	// for unique classes page
	// const uniqueURL = url.pathname.replace(/^\/|\/$/g, "");
	const uniqueURL = url.pathname.split("/")[1];
	const uniquePage = url.pathname === "/" ? "home" : "page " + uniqueURL;
	return (
		<div className={`${uniquePage}`}>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: "PT WALS",
	description:
		"PT WALS. (Wahyudi Andy Laksito Setiarso) adalah sebuah perusahaan jasa konsultansi yang bergerak di bidang survey & pemetaan, perencanaan, lingkungan hidup, studi kelayakan potensi sumber daya alam dan sumber daya manusia.",
};
