import Link from "next/link";

export default function ErrorPage() {
	return (
		<>
			<h1>404</h1>
			<p>
				Данной страницы не существует. Вернуться{" "}
				<Link href={"/"}>
					<a>на главную страницу</a>
				</Link>
			</p>
		</>
	);
}
