import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/scss/FeaturedImage.module.scss";
import table from "../../styles/scss/Table.module.scss";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

export default function Projects({ projects }) {
	return (
		<Layout title="Klien PT WALS.">
			<div className="content">
				<div className="wrapper">
					<figure className={styles.featuredImage}>
						<h1 className={styles.title}>All Projects</h1>
						<Image
							src="/images/headline.jpg"
							layout="fill"
							objectFit="cover"
							alt="Klien PT WALS."
						/>
					</figure>
					<Container className={`mb-4 ${table.table}`}>
						<div className={table.heading}>
							<div></div>
							<div>
								<h3>Nama Proyek</h3>
							</div>
							<div>
								<h3>Waktu Proyek</h3>
							</div>
							<div>
								<h3>Klien</h3>
							</div>
						</div>
						<ol>
							{projects.map((project) => (
								<li key={project.id} className={table.list}>
									<div className={`wrapper ${table.content}`}>
										<div className={table.title}>
											<p>{project.title}</p>
										</div>
										<div className={table.time}>
											<p>
												{new Date(project.project_start)
													.toDateString()
													.split(" ")
													.slice(1)
													.join(" ")}
											</p>
											<p>-</p>
											<p>
												{new Date(project.project_end)
													.toDateString()
													.split(" ")
													.slice(1)
													.join(" ")}
											</p>
										</div>
										<div className={table.client}>
											<p>{project.client}</p>
										</div>
									</div>
								</li>
							))}
						</ol>
					</Container>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/projects`, {
		headers: {
			// update with your user-agent
			"User-Agent":
				"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
			Accept: "application/json; charset=UTF-8",
		},
	});
	const projects = await res.json();
	console.log(projects);
	return {
		props: {
			projects,
		},
	};
}
