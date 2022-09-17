import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Button from '@components/Button'
import Table from '@components/Table'

gsap.registerPlugin(ScrollTrigger)

const FeatureProfit = () => {
	const headText = useRef(null)
	const paragraphText = useRef(null)
	const button = useRef(null)
	const table = useRef(null)

	const tl = gsap.timeline()

	ScrollTrigger.create({
		animation: tl,
		trigger: '.features__content--3',
		start: 'top 30%',
	})

	useEffect(() => {
		tl.from(headText, {
			opacity: 0,
			x: -50,
		})
			.fromTo(table, { opacity: 0, y: 80 }, { opacity: 1, y: 50, stagger: 0.3 })
			.from('.rogue-row', {
				background: '#35068c',
				right: '1%',
				stagger: 0.5,
			})
			.from([paragraphText, button], {
				opacity: 0,
				y: 50,
				stagger: 0.3,
			})
	}, [])

	return (
		<div className='features__content features__content--3'>
			<div>
				<h3 ref={(el) => (headText = el)}>
					Grow your profit and track your investments
				</h3>
				<p ref={(el) => (paragraphText = el)}>
					Use advanced analytical tools. Clear TradingView charts let you track
					current and historical profit investments.
				</p>
				<Button ref={(el) => (button = el)}>Learn More</Button>
			</div>
			<Table ref={(el) => (table = el)} className='rogue-row' />
		</div>
	)
}

export default FeatureProfit
