import Layout from 'components/layout';
import Login from 'pages/login';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Layout seoTitle="Home">
        <Head>
          <title>Home</title>
        </Head>
        <Login />
      </Layout>
    </>
  );
};

export default Home;
