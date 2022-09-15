import BitcoinLogo from '@icons/BitcoinLogo'
import Chart from '@icons/Chart'

const BarChart = () => {
	return (
		<div className='barchart'>
			<div className='barchart__head'>
				<div className='barchart__text-content'>
					<BitcoinLogo className='barchart__bitcoin-logo' />
					<div>
						<h4 className='barchart__title'>
							Bitcoin <span>BTC</span>
						</h4>
						<p>0.00080 BTC</p>
					</div>
				</div>
				<p>+125%</p>
			</div>

			<div className='barchart__chart-container'>
				<Chart className='barchart__chart' />
			</div>

			<div className='barchart__tags barchart__tags--left'>
				<h4>Increase in Trade</h4>
				<h4>
					+75% <small>&uarr;</small>
				</h4>
				<p>Sell option</p>
			</div>
			<div className='barchart__tags barchart__tags--right'>
				<h4>$15.32</h4>
				<p>Price in dollar</p>
			</div>
		</div>
	)
}

export default BarChart
