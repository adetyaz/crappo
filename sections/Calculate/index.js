import Button from '@components/Button'
import InputField from '@components/InputField'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Calculate = () => {
	const tl = gsap.timeline()

	ScrollTrigger.create({
		animation: tl,
		trigger: '.calculate',
		start: 'top 30%',
	})

	const headText = useRef(null)
	const paragraphText = useRef(null)
	const paragraphText1 = useRef(null)
	const calculatorWrapper = useRef(null)

	useEffect(() => {
		tl.from(
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
			.from(paragraphText, {
				opacity: 0,
				y: 50,
				stagger: 0.3,
			})
			.from(paragraphText1, {
				opacity: 0,
				y: 50,
				stagger: 0.2,
			})
			.from(calculatorWrapper, {
				opacity: 0,
				y: 50,
				stagger: 2,
			})
	}, [])

	return (
		<section className='calculate'>
			<div className='calculate__text-content'>
				<h2 ref={(el) => (headText = el)}>Check how much you can earn</h2>
				<p ref={(el) => (paragraphText = el)}>
					Let’s check your hash rate to see how much you will earn today,
				</p>
				<p ref={(el) => (paragraphText1 = el)}>
					Exercitation veniam consequat sunt nostrud amet.
				</p>
			</div>
			<div
				className='calculate__calculator'
				ref={(el) => (calculatorWrapper = el)}
			>
				<div className='calculate__calculator--input'>
					<div className='calculate__calculator--wrapper'>
						<InputField
							placeholder='Enter your hash rate'
							className='calculate__input-1'
						/>
						<InputField placeholder='TH/s' className='calculate__input-2' />
					</div>
					<Button>Calculate</Button>
				</div>
				<p>ESTIMATED 24 HOUR REVENUE:</p>
				<h2 className='alternate'>
					0.055 130 59 ETH<span> ($1275)</span>
				</h2>
				<p className='alternate'>
					Revenue will change based on mining difficulty and Ethereum price.
				</p>
			</div>
		</section>
	)
}

export default Calculate
