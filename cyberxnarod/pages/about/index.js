import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "../../layouts/MainLayout";

export default function About() {
	return (
		<MainLayout>
			<Head>
				<title>О нас | CyberX</title>
			</Head>

			<h1>О нас</h1>
			<button onClick={() => Router.push("/")}>Home</button>
		</MainLayout>
	);
}
