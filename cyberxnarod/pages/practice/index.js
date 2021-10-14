import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "../../layouts/MainLayout";

export default function Practice() {
	return (
		<MainLayout>
			<Head>
				<title>Тренировки | CyberX</title>
			</Head>

			<h1>Тренировки</h1>
			<button onClick={() => Router.push("/")}>Home</button>
		</MainLayout>
	);
}
