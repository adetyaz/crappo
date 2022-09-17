import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Button from '@components/Button'

const tl = gsap.timeline()

const Navigation = () => {
	const productLink = useRef(null)
	const featuresLink = useRef(null)
	const aboutLink = useRef(null)
	const contactLink = useRef(null)
	const loginLink = useRef(null)
	const buttonLink = useRef(null)

	useEffect(() => {
		tl.fromTo(
			[productLink, featuresLink, aboutLink, contactLink, loginLink],
			{
				delay: 2,
				y: '2rem',
			},
			{
				y: 0,
				duration: 0.5,
				ease: 'Back.easeOut',
				stagger: 0.1,
			}
		).fromTo(
			buttonLink,
			{
				x: '10rem',
			},
			{ x: 0 }
		)
	}, [])

	return (
		<>
			<nav className='nav'>
				<div>X</div>
				<ul className='nav__items'>
					<li className='nav__list'>
						<a className='nav__link' ref={(el) => (productLink = el)}>
							products
						</a>
					</li>
					<li className='nav__list'>
						<a className='nav__link' ref={(el) => (featuresLink = el)}>
							features
						</a>
					</li>
					<li className='nav__list'>
						<a className='nav__link' ref={(el) => (aboutLink = el)}>
							about
						</a>
					</li>
					<li className='nav__list'>
						<a className='nav__link' ref={(el) => (contactLink = el)}>
							contact
						</a>
					</li>
				</ul>
				<ul className='nav__items'>
					<li className='nav__list'>
						<a className='nav__link' ref={(el) => (loginLink = el)}>
							login
						</a>
					</li>
					|
					<li className='nav__list'>
						<Button ref={(el) => (buttonLink = el)}>Register</Button>
					</li>
				</ul>
			</nav>
			<div className='toggle'></div>
		</>
	)
}

export default Navigation
