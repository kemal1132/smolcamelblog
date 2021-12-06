import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>smol Camel</title>
        <meta name="description" content="This is a website where I share my projects" />
        <link rel="icon" href="/smolcamel-temp.ico" />
      </Head>

      <main className={styles.main}>
        This is where I will put my cv? I dont know if I will do that.
      </main>

      <footer className={styles.footer}>
        This is where I will put my footer
      </footer>
    </div>
  )
}
