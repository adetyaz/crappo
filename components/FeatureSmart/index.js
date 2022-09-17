import BarChart from '@components/Chart'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Button from '@components/Button'

gsap.registerPlugin(ScrollTrigger)

const FeatureSmart = () => {
	const headText = useRef(null)
	const paragraphText = useRef(null)
	const button = useRef(null)
	const chart = useRef(null)

	const tl = gsap.timeline()

	ScrollTrigger.create({
		animation: tl,
		trigger: '.features__content--1',
		start: 'top 30%',
	})

	useEffect(() => {
		tl.from(headText, {
			opacity: 0,
			x: -50,
		})
			.from(chart, {
				opacity: 0,
				y: 50,
			})
			.from('.barchart__chart', {
				scaleY: 0,
				transformOrigin: 'bottom left',
				duration: 1,
				stagger: 0.2,
			})

			.fromTo(
				['.left-tag', '.right-tag'],
				{
					opacity: 0,
					y: 50,
				},
				{
					opacity: 1,
					y: 0,
					stagger: 0.3,
				}
			)
			.from([paragraphText, button], {
				opacity: 0,
				y: 50,
				stagger: 0.3,
			})
	}, [])

	return (
		<div className='features__content features__content--1'>
			<div>
				<h3 ref={(el) => (headText = el)}>Invest Smart</h3>
				<p ref={(el) => (paragraphText = el)}>
					Get full statistic information about the behaviour of buyers and
					sellers will help you to make the decision.
				</p>
				<Button ref={(el) => (button = el)}>Learn More</Button>
			</div>
			<BarChart
				ref={(el) => (chart = el)}
				className={['barchart__chart', 'right-tag', 'left-tag']}
			/>
		</div>
	)
}

export default FeatureSmart
