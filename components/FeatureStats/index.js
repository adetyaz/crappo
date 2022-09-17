import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Button from '@components/Button'

gsap.registerPlugin(ScrollTrigger)
const FeatureStats = () => {
	const headText = useRef(null)
	const paragraphText = useRef(null)
	const button = useRef(null)
	const image = useRef(null)

	const tl = gsap.timeline()

	ScrollTrigger.create({
		animation: tl,
		trigger: '.features__content--2 ',
		start: 'top 30%',
	})

	useEffect(() => {
		tl.from(image, {
			opacity: 0,
			left: '-35%',
		})
			.from(headText, {
				opacity: 0,
				x: -50,
			})
			.from([paragraphText, button], {
				opacity: 0,
				y: 50,
				stagger: 0.3,
			})
	}, [])
	return (
		<div className='features__content features__content--2 alternate'>
			<img
				src='/statistic.png'
				alt='statistics'
				className='features__statistics-image'
				ref={(el) => (image = el)}
			/>

			<div>
				<h3 ref={(el) => (headText = el)}>Detailed Statistics</h3>
				<p ref={(el) => (paragraphText = el)}>
					View all mining related information in realtime, at any point at any
					location and decide which polls you want to mine in.
				</p>
				<Button ref={(el) => (button = el)}>Learn More</Button>
			</div>
		</div>
	)
}

export default FeatureStats
