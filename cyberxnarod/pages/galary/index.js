import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "../../layouts/MainLayout";

export default function Galary() {
	return (
		<MainLayout>
			<Head>
				<title>Галерея | CyberX</title>
			</Head>

			<h1>Галерея</h1>
			<button onClick={() => Router.push("/")}>Главная</button>
		</MainLayout>
	);
}
