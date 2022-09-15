import BarChartIcon from '@icons/BarChartIcon'
import EarthIcon from '@icons/EarthIcon'
import PersonIcon from '@icons/PersonIcon'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Valuation = () => {
	const tl = gsap.timeline()

	ScrollTrigger.create({
		animation: tl,
		trigger: '.valuation',
		start: 'top 60%',
		// markers: true,
	})

	const titleRef1 = useRef(null)
	const titleRef2 = useRef(null)
	const titleRef3 = useRef(null)
	const textRef1 = useRef(null)
	const textRef2 = useRef(null)
	const textRef3 = useRef(null)
	const iconRef1 = useRef(null)
	const iconRef2 = useRef(null)
	const iconRef3 = useRef(null)

	useEffect(() => {
		tl.from(iconRef1, {
			opacity: 0,
			rotate: 50,
			ease: 'Back.easeOut',
		})
			.fromTo(
				titleRef1,
				{
					clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
				},
				{
					clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',

					ease: 'Power3.easeOut',
					stagger: 0.3,
				}
			)
			.from(textRef1, {
				opacity: 0,
				y: 50,
			})
			.from(
				iconRef2,
				{
					opacity: 0,
					rotate: 50,
					ease: 'Back.easeOut',
				},
				'-=0'
			)
			.fromTo(
				titleRef2,
				{
					clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
				},
				{
					clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
					duration: 1,
					ease: 'Power3.easeOut',
					stagger: 0.3,
				}
			)
			.from(textRef2, {
				opacity: 0,
				y: 50,
			})
			.from(iconRef3, {
				opacity: 0,
				rotate: 50,
				ease: 'Back.easeOut',
			})
			.fromTo(
				titleRef3,
				{
					clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
				},
				{
					clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
					duration: 1,
					ease: 'Power3.easeOut',
					stagger: 0.3,
				}
			)
			.from(textRef3, {
				opacity: 0,
				y: 50,
			})
	}, [])

	return (
		<section className='valuation'>
			<div className='valuation__content'>
				<BarChartIcon
					className='valuation__icon'
					ref={(el) => (iconRef1 = el)}
				/>
				<div className='valuation__text-content'>
					<h2 ref={(el) => (titleRef1 = el)}>$30B</h2>
					<p ref={(el) => (textRef1 = el)}>Digital Currency Exchanged</p>
				</div>
			</div>
			<div className='valuation__content'>
				<PersonIcon className='valuation__icon' ref={(el) => (iconRef2 = el)} />
				<div className='valuation__text-content'>
					<h2 ref={(el) => (titleRef2 = el)}> 10M+</h2>
					<p ref={(el) => (textRef2 = el)}>Trusted Wallets Investor</p>
				</div>
			</div>
			<div className='valuation__content'>
				<EarthIcon className='valuation__icon' ref={(el) => (iconRef3 = el)} />
				<div className='valuation__text-content'>
					<h2 ref={(el) => (titleRef3 = el)}>195</h2>
					<p ref={(el) => (textRef3 = el)}>Countries Supported</p>
				</div>
			</div>
		</section>
	)
}

export default Valuation
