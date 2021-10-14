import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>CyberX Народная</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainLayout>
				<h1>Главная</h1>
			</MainLayout>
		</div>
	);
}
