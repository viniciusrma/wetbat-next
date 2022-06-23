import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wet Bat</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Wet bat app" />
      </Head>

      <Header />
    </div>
  );
}
