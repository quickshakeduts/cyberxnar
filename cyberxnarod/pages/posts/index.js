import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "../../layouts/MainLayout";

export default function Posts() {
	return (
		<MainLayout>
			<Head>
				<title>Новости</title>
			</Head>

			<h1>Posts</h1>
			<button onClick={() => Router.push("/")}>Home</button>
		</MainLayout>
	);
}
