import Button from '@components/Button'
import DShape from '@icons/DShape'
import EngineImage from '@icons/EngineImage'
import LineshapeThree from '@icons/LineshapeThree'
import UShape from '@icons/UShape'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Choose = () => {
	const tl = gsap.timeline()

	ScrollTrigger.create({
		animation: tl,
		trigger: '.choose',
		start: 'top 40%',
	})

	const headText = useRef(null)
	const paragraphText = useRef(null)
	const button = useRef(null)

	useEffect(() => {
		tl.from('.choose__line', {
			opacity: 0,
			top: '8%',
		})
			.from(
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
			.from('.choose__image', {
				opacity: 0,
				y: 50,
				stagger: 0.5,
			})
			.from([paragraphText, button], {
				opacity: 0,
				y: 50,
				stagger: 0.3,
			})
			.from('.choose__circle', {
				right: '-10%',
				rotate: -43,
			})
			.from('.choose__u-shape', {
				opacity: 0,
				right: '-10%',
			})
	}, [])

	return (
		<section className='choose'>
			<EngineImage className='choose__image' />
			<article className='choose__text-content'>
				<div>
					<h2 ref={(el) => (headText = el)}>Why you should choose CRAPPO </h2>
				</div>

				<p ref={(el) => (paragraphText = el)}>
					Experience the next generation cryptocurrency platform. No financial
					borders, extra fees, and fake reviews.
				</p>
				<Button ref={(el) => (button = el)}>Learn More</Button>
			</article>
			<DShape className='choose__circle' />
			<LineshapeThree className='choose__line' />
			<UShape className='choose__u-shape' />
		</section>
	)
}

export default Choose
