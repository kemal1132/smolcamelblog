import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { startClock } from '../redux/Reducers/actions'
import Examples from '../components/example'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])



  return (
    <div className={styles.container}>
      <Head>
        <title>smol Camel</title>
        <meta name="description" content="This is a website where I share my projects" />
        <link rel="icon" href="/smolcamel-temp.ico" />
      </Head>
      
      <Examples />
      <Link href="/show-redux-state">
         <a>Click to see current Redux State</a>
      </Link>

      <Link href="/gameoflife">
          <a>Click to see Game of Life</a>
      </Link>
     

      <main className={styles.main}>
        This is where I will put my cv? I dont know if I will do that.
      </main>

      <footer className={styles.footer}>
        This is where I will put my footer
      </footer>
    </div>
  )
}
