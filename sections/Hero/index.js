import Button from '@components/Button'
import Bitcoin from '@icons/Bitcoin'
import LineshapeOne from '@icons/LineshapeOne'
import LineshapeTwo from '@icons/LineshapeTwo'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const tl = gsap.timeline()

const Hero = () => {
	const tag = useRef(null)
	const headerText = useRef(null)
	const headerText1 = useRef(null)
	const headerText2 = useRef(null)
	const paragraphText = useRef(null)
	const button = useRef(null)
	const line1 = useRef(null)
	const line2 = useRef(null)

	useEffect(() => {
		tl
			// .fromTo(
			// 	tag,
			// 	{
			// 		opacity: 0,
			// 		x: '-15rem',
			// 	},
			// 	{
			// 		opacity: 1,
			// 		x: 0,
			// 	}
			// )
			// 	.fromTo(
			// 		[headerText, headerText1, headerText2],
			// 		{
			// 			clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
			// 		},
			// 		{
			// 			clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
			// 			duration: 1,
			// 			stagger: 0.3,
			// 			ease: 'Power3.easeOut',
			// 		}
			// 	)
			// 	.from([paragraphText, button], {
			// 		opacity: 0,
			// 		y: 50,
			// 		stagger: 0.1,
			// 	})

			.from([line1, line2], {
				scaleY: 0,
				transformOrigin: 'bottom left',
				stagger: 0.5,
				duration: 1,
				ease: 'Circ.easeOut',
			})
	}, [])

	return (
		<section className='hero'>
			<div className='hero__text-content'>
				<span className='hero__tag' ref={(el) => (tag = el)}>
					<small className='hero__tag--text'>75% SAVE</small>
					For the Black Friday weekend
				</span>
				<article className='hero__text'>
					<h1 ref={(el) => (headerText = el)}>Fastest & secure</h1>
					<h1 ref={(el) => (headerText1 = el)}>platform to invest</h1>
					<h1 ref={(el) => (headerText2 = el)}>in crypto</h1>
					<p ref={(el) => (paragraphText = el)}>
						Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
						billion in transactions.
					</p>
				</article>
				<Button icon ref={(el) => (button = el)}>
					Try for FREE
				</Button>
			</div>
			<div>
				<Bitcoin className='hero__image' />
			</div>

			<LineshapeOne ref={(el) => (line1 = el)} className='hero__line-1' />
			<LineshapeTwo ref={(el) => (line2 = el)} className='hero__line-2' />
		</section>
	)
}

export default Hero
