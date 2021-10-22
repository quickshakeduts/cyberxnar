import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../layouts/MainLayout";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>CyberX Народная</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainLayout>
				<Link href={'https://vk.com/cyberx.spb.narodnaya'}><a>Отзывы</a></Link>
				<Link href={'https://vk.com/cyberx.spb.narodnaya'}><a>Жалобы и предложения</a></Link>
				<h1>Лучшее киберспортивное пространство Санкт- Петербурга</h1>
				<p>CyberX NARODNAYA - GAMER ZONE ультрасовременный компьютерный клуб для тех кто любит проводить время с удовольствием.</p>
			</MainLayout>
		</div>
	);
}
