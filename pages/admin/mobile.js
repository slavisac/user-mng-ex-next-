import Head from 'next/head'
import NavDrawer from '../../layout/NavDrawer';


const Mobile = () => {
  return (
    <>
      <Head>
        <title>eWheel2 | Mobile Settings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

Mobile.Layout = NavDrawer;

export default Mobile;