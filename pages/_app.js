
import '../css/form.css'
import '../styles/styles.css'
import '../styles/index.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {

  return (
    <Provider options={{ site: process.env.SITE }} session={pageProps.session}>
      <Head>
        <title>Pet Care App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Layout>
        {/* <div className="grid wrapper"> */}
          <Component {...pageProps} />
        {/* </div> */}
      </Layout>

    </Provider>
  )
}

export default MyApp
