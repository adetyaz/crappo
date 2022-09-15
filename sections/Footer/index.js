import BitcoinCard from '@icons/BitcoinCard'
import FacebookIcon from '@icons/FacebookIcon'
import InstagramIcon from '@icons/InstagramIcon'
import LinkedinIcon from '@icons/LinkedinIcon'
import Logo from '@icons/Logo'
import MastercardIcon from '@icons/MastercardIcon'
import TwitterIcon from '@icons/TwitterIcon'
import VisacardIcon from '@icons/VisacardIcon'
import YoutubeIcon from '@icons/YoutubeIcon'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__content'>
				<Logo />
				<ul>
					<h3>Quick Link</h3>
					<li>Home </li>
					<li>Products</li>
					<li>About</li>
					<li>Features</li>
					<li>Contact</li>
				</ul>
				<ul>
					<h3>Resources</h3>
					<li>Download Whitepapper </li>
					<li>Smart Token</li>
					<li>Blockchain Explorer</li>
					<li>Crypto API</li>
					<li>Interest</li>
				</ul>
				<div>
					<h3>We accept following payment systems</h3>
					<div className='footer__cards'>
						<VisacardIcon className='footer__card' />
						<MastercardIcon className='footer__card' />
						<BitcoinCard className='footer__card' />
					</div>
				</div>
			</div>
			<div className='footer__copyright'>
				<p>©2021 CRAPPO. All rights reserved</p>
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
