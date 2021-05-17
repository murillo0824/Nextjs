import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Layout({ children, title = "Hp by nextjs" }) {
  return (
    <div className={styles.globalNav}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className={styles.golbalNav}>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href="/blog-page">
              <a>blog</a>
            </Link>
          </div>
          <div>
            <Link href="/contact-page">
              <a>contact</a>
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className={styles.flexWrapper}>
          <div className={styles.flexWrapper__left}></div>
          <div className={styles.flexWrapper__right}>{children}</div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
