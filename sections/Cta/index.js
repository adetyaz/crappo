import Button from '@components/Button'
import InputField from '@components/InputField'
import BtcShape from '@icons/BtcShape'
import EthShape from '@icons/EthShape'

const Cta = () => {
	return (
		<section className='cta'>
			<div className='cta__card'>
				<div className='cta__text-content'>
					<h3> Start mining now</h3>
					<p>
						Join now with CRAPPO to get the latest news and start mining now
					</p>
				</div>
				<div className='cta__form-content'>
					<InputField
						placeholder='Enter you email'
						className='cta__input alternate'
					/>
					<Button className='cta__button alternate'>Subscribe</Button>
				</div>

				<EthShape className='cta__eth' />
				<BtcShape className='cta__btc' />
			</div>
		</section>
	)
}

export default Cta
