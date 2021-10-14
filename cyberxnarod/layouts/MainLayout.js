import Link from "next/link";
import styles from "../styles/MainLayout.module.scss";
import Image from "next/image";
import HeaderImg from "../public/header.jpg";

export function MainLayout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.imageWrapper}>
            <Image src={HeaderImg} />
          </div>
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
        <main className={styles.main}>{children}</main>
      </div>
      <footer className={styles.footer}>
        <ul className={styles.footerElem}>
          <li>
            <Link href={"/about"}>
              <a>О нас</a>
            </Link>
          </li>
          <li>
            <Link href={"/contacts"}>
              <a>Контакты</a>
            </Link>
          </li>
          <li>
            <Link href={"/practice"}>
              <a>Тренировки</a>
            </Link>
          </li>
          <li>
            <Link href={"/team"}>
              <a>Наша команда</a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
