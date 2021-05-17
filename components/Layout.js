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
              <a>test</a>
            </Link>
          </div>
          <div>
            <Link href="/blog-page">
              <a>test</a>
            </Link>
            test
          </div>
          <div>test</div>
          <div>test</div>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
