import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Login from '../components/Login';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cheeze Burger | Home</title>
      </Head>
      <Login />
    </>
  );
};

export default Home;
