import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "../../layouts/MainLayout";

export default function Team() {
	return (
		<MainLayout>
			<Head>
				<title>Наша команда | CyberX</title>
			</Head>

			<h1>Наша команда</h1>
			<button onClick={() => Router.push("/")}>Home</button>
		</MainLayout>
	);
}
