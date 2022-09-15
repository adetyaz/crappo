import '../styles/globals.scss'
import '@fontsource/rubik'
import '@fontsource/inter'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function MyApp({ Component, pageProps }) {
	gsap.registerPlugin(ScrollTrigger)

	return <Component {...pageProps} />
}

export default MyApp
