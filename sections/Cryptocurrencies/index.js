import Card from '@components/Card'
import BitcoinLogo from '@icons/BitcoinLogo'
import EthereumLogo from '@icons/EthereumLogo'
import LitecoinLogo from '@icons/LitecoinLogo'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Cryptocurrencies = () => {
	const tl = gsap.timeline()

	ScrollTrigger.create({
		animation: tl,
		trigger: '.cryptocurrencies',
		start: 'top 40%',
	})

	const headText = useRef(null)
	const headText2 = useRef(null)
	const card = useRef(null)
	const card2 = useRef(null)

	const card3 = useRef(null)

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
			.from(
				headText2,
				{
					rotate: 20,
					y: 200,
				},
				{
					rotate: 0,
					y: 0,
					ease: 'Power4.easeOut',
					stagger: 0.3,
				}
			)
			.fromTo(
				card,
				{
					opacity: 0,
					y: 50,
					scale: 1.2,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					stagger: 0.3,
					ease: 'Sine.easeOut',
				}
			)
			.fromTo(
				card2,
				{
					opacity: 0,
					y: 50,
					scale: 1.2,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					stagger: 0.3,
					ease: 'Sine.easeOut',
				}
			)
			.fromTo(
				card3,
				{
					opacity: 0,
					y: 50,
					scale: 1.2,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					stagger: 0.3,
					ease: 'Sine.easeOut',
				}
			)
	}, [])

	return (
		<section className='cryptocurrencies'>
			<div>
				<h2 className='alternate' ref={(el) => (headText = el)}>
					Trade securely and market the high
				</h2>
			</div>
			<div>
				<h2 className='alternate' ref={(el) => (headText2 = el)}>
					growth cryptocurrencies.
				</h2>
			</div>

			<div className='cryptocurrencies__content'>
				<Card
					logo={<BitcoinLogo className='cryptocurrencies__logo' />}
					title={'Bitcoin'}
					sub={'BTC'}
					text={
						'Digital currency in which a record of transactions is maintained.'
					}
					ref={(el) => (card = el)}
				/>
				<Card
					logo={<EthereumLogo className='cryptocurrencies__logo' />}
					title={'Ethereum '}
					sub={'ETH'}
					text={
						'Blockchain technology to create and run decentralized digital applications.'
					}
					ref={(el) => (card2 = el)}
				/>
				<Card
					logo={<LitecoinLogo className='cryptocurrencies__logo' />}
					title={'Litecoin'}
					sub={'LTC'}
					text={
						'Cryptocurrency that enables instant payments to anyone in the world.'
					}
					ref={(el) => (card3 = el)}
				/>
			</div>
		</section>
	)
}

export default Cryptocurrencies
