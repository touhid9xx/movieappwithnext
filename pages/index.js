import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nox+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
