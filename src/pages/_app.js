import Footer from 'app/components/HomePage/components/Footer'
import Header from 'app/components/HomePage/components/Header'
import 'app/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
    
    <Component {...pageProps} />
    <div>
        <Footer />
    </div>
  </div>
}
