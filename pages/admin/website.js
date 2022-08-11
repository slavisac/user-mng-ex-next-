import Head from 'next/head'
import NavDrawer from '../../layout/NavDrawer';


const Website = () => {
  return (
    <>
      <Head>
        <title>eWheel2 | Website Settings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

Website.Layout = NavDrawer;

export default Website;