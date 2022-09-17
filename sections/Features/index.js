import Button from '@components/Button'
import FeatureProfit from '@components/FeatureProfit'
import FeatureSmart from '@components/FeatureSmart'
import FeatureStats from '@components/FeatureStats'
import CircleShape from '@icons/CircleShape'
import QuatercircleShape from '@icons/QuatercircleShape'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
	const tl = gsap.timeline()

	const headText = useRef(null)
	const headText2 = useRef(null)

	ScrollTrigger.create({
		animation: tl,
		trigger: '.features',
		start: 'top 60%',
	})

	useEffect(() => {
		tl.from('.features__floating-circle', {
			top: '-1rem',
			opacity: 0,
			duration: -1,
		})
			.fromTo(
				headText,
				{
					rotate: 20,
					y: 200,
				},
				{
					rotate: 0,
					y: 0,
					ease: 'Power4.easeOut',
				}
			)
			.fromTo(
				headText2,
				{
					rotate: 20,
					y: 200,
				},
				{
					rotate: 0,
					y: 0,
					ease: 'Power4.easeOut',
					stagger: 0.2,
				}
			)
	}, [])

	return (
		<section className='features'>
			<CircleShape className='features__floating-circle' />
			<div className='features__header-text'>
				<div>
					<h2 ref={(el) => (headText = el)}>
						Market sentiments, portfolio, and run
					</h2>
				</div>
				<div>
					<h2 ref={(el) => (headText2 = el)}>
						the infrastructure of your choice
					</h2>
				</div>
			</div>

			<FeatureSmart />
			<FeatureStats />
			<FeatureProfit />
			<QuatercircleShape className='features__quater-circle' />
		</section>
	)
}

export default Features
