import BitcoinCard from '@icons/BitcoinCard'
import FacebookIcon from '@icons/FacebookIcon'
import InstagramIcon from '@icons/InstagramIcon'
import LinkedinIcon from '@icons/LinkedinIcon'
import Logo from '@icons/Logo'
import MastercardIcon from '@icons/MastercardIcon'
import TwitterIcon from '@icons/TwitterIcon'
import VisacardIcon from '@icons/VisacardIcon'
import YoutubeIcon from '@icons/YoutubeIcon'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
	const tl = gsap.timeline()

	const logo = useRef(null)
	const footerContent = useRef(null)
	const footerContent2 = useRef(null)
	const footerContent3 = useRef(null)
	const card = useRef(null)
	const card2 = useRef(null)
	const card3 = useRef(null)
	const paragraphText = useRef(null)

	ScrollTrigger.create({
		animation: tl,
		trigger: '.footer__content',
		start: 'top 40%',
		markers: true,
	})

	useEffect(() => {
		tl.from([logo, footerContent, footerContent2, footerContent3], {
			opacity: 0,
			y: 30,
			stagger: 0.3,
		})
			.from([card, card2, card3], {
				opacity: 0,
				y: 30,
				rotate: 20,
				stagger: 0.3,
			})
			.from([paragraphText, '.footer__social-icons'], {
				opacity: 0,
				y: 30,
				stagger: 0.5,
			})
	}, [])

	return (
		<footer className='footer'>
			<div className='footer__content'>
				<Logo className='logo' ref={(el) => (logo = el)} />
				<ul ref={(el) => (footerContent = el)}>
					<h3>Quick Link</h3>
					<li>Home </li>
					<li>Products</li>
					<li>About</li>
					<li>Features</li>
					<li>Contact</li>
				</ul>
				<ul ref={(el) => (footerContent2 = el)}>
					<h3>Resources</h3>
					<li>Download Whitepapper </li>
					<li>Smart Token</li>
					<li>Blockchain Explorer</li>
					<li>Crypto API</li>
					<li>Interest</li>
				</ul>
				<div ref={(el) => (footerContent3 = el)}>
					<h3>We accept following payment systems</h3>
					<div className='footer__cards'>
						<VisacardIcon ref={(el) => (card = el)} className='footer__card' />
						<MastercardIcon
							ref={(el) => (card2 = el)}
							className='footer__card'
						/>
						<BitcoinCard ref={(el) => (card3 = el)} className='footer__card' />
					</div>
				</div>
			</div>
			<div className='footer__copyright'>
				<p ref={(el) => (paragraphText = el)}>
					©2021 CRAPPO. All rights reserved
				</p>
				<div className='footer__social-icons'>
					<FacebookIcon className='footer__social-icon' />
					<InstagramIcon className='footer__social-icon' />
					<YoutubeIcon className='footer__social-icon' />
					<TwitterIcon className='footer__social-icon' />
					<LinkedinIcon className='footer__social-icon' />
				</div>
			</div>
		</footer>
	)
}

export default Footer
