import BitcoinLogo from '@icons/BitcoinLogo'
import Chart from '@icons/Chart'
import React from 'react'

const BarChart = React.forwardRef(({ className }, ref) => {
	return (
		<div className='barchart' ref={ref}>
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
				<Chart className={className[0]} />
			</div>

			<div className={`barchart__tags barchart__tags--left ${className[2]}`}>
				<h4>Increase in Trade</h4>
				<h4>
					+75% <small>&uarr;</small>
				</h4>
				<p>Sell option</p>
			</div>
			<div className={`barchart__tags barchart__tags--right ${className[1]}`}>
				<h4>$15.32</h4>
				<p>Price in dollar</p>
			</div>
		</div>
	)
})
export default BarChart
