import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>
        Home | football
      </title>
    </Head>
    <div>
    <h1 className={styles.title}>home page</h1>
    <p className={styles.text}>lorem ipsum</p>
    <Link href={'/ninjas'} >
      <a className={styles.btn}>players</a>
    </Link>
    </div>
    </>
  )
}
