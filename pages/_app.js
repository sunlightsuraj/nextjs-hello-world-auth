import Header from '../components/Header'
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <SessionProvider session={session}>
          <Header />
          <div style={{ marginTop: '10px' }}>
              <Component {...pageProps} />
          </div>
      </SessionProvider>
  )
}

export default MyApp
