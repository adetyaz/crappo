import Button from '@components/Button'
import InputField from '@components/InputField'
import BtcShape from '@icons/BtcShape'
import EthShape from '@icons/EthShape'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Cta = () => {
	const tl = gsap.timeline()

	ScrollTrigger.create({
		animation: tl,
		trigger: '.cta',
		start: 'top 40%',
	})

	const headText = useRef(null)
	const paragraphText = useRef(null)
	const container = useRef(null)
	const button = useRef(null)

	useEffect(() => {
		tl.from(container, {
			y: 50,
			opacity: 0,
		})
			.from('.cta__eth', {
				y: -50,
				stagger: 0.2,
			})
			.from(headText, {
				opacity: 0,
				x: -50,
			})
			.from(paragraphText, {
				opacity: 0,
				y: 50,
				stagger: 0.3,
			})
			.from('.cta__input', {
				opacity: 0,
				y: -50,
			})
			.from(button, {
				x: 50,
				opacity: 0,
				stagger: 0.3,
			})
			.from('.cta__btc', {
				bottom: '-5rem',
				opacity: 0,
				stagger: 0.2,
			})
	}, [])

	return (
		<section className='cta'>
			<div className='cta__card' ref={(el) => (container = el)}>
				<div className='cta__text-content'>
					<h3 ref={(el) => (headText = el)}> Start mining now</h3>
					<p ref={(el) => (paragraphText = el)}>
						Join now with CRAPPO to get the latest news and start mining now
					</p>
				</div>
				<div className='cta__form-content'>
					<InputField
						placeholder='Enter you email'
						className='cta__input alternate'
					/>
					<Button className='cta__button alternate' ref={(el) => (button = el)}>
						Subscribe
					</Button>
				</div>

				<EthShape className='cta__eth' />
				<BtcShape className='cta__btc' />
			</div>
		</section>
	)
}

export default Cta
