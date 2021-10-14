import Link from "next/link";
import styles from "../styles/Header.module.css";
export function MainLayout({ children }) {
	return (
		<>
			<header>
				<nav>
					<ul className={styles.ul}>
						<li>
							<Link href={"/"}>
								<a>Главная</a>
							</Link>
						</li>
						<li>
							<Link href={"/posts"}>
								<a>Новости</a>
							</Link>
						</li>
						<li>
							<Link href={"/about"}>
								<a>О нас</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>{children}</main>
			<footer></footer>
		</>
	);
}
