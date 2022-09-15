import BitcoinLogo from '@icons/BitcoinLogo'
import CaretDown from '@icons/CaretDown'
import CaretUp from '@icons/CaretUp'
import EthereumLogo from '@icons/EthereumLogo'
import LitecoinLogo from '@icons/LitecoinLogo'

const Table = () => {
	return (
		<div className='table'>
			<div className='table__head'>
				<p>Price</p>
				<p>Change</p>
				<p>Volume (24h)</p>
			</div>
			<div className='table__body'>
				<div>
					<BitcoinLogo className='table__logo' />
					<div className='table__title'>
						<h4>BTC</h4>
						<p>Bitcoin</p>
					</div>
				</div>
				<p>$6750</p>
				<div>
					<CaretUp className='table__caret' />
					<p>+7.3%</p>
				</div>
				<p>$3420214</p>
			</div>

			<div className='table__body alternate'>
				<div>
					<EthereumLogo className='table__logo' />
					<div className='table__title'>
						<h4>ETH</h4>
						<p>Ethereum</p>
					</div>
				</div>
				<p>$156.83</p>
				<div>
					<CaretDown className='table__caret' />
					<p>+70.9%</p>
				</div>
				<p>$1812350</p>
			</div>

			<div className='table__body'>
				<div>
					<LitecoinLogo className='table__logo' />
					<div className='table__title'>
						<h4>LTC</h4>
						<p>Litecoin</p>
					</div>
				</div>
				<p>$8535</p>
				<div>
					<CaretUp className='table__caret' />
					<p>+8.2%</p>
				</div>
				<p>$5820399</p>
			</div>
		</div>
	)
}

export default Table
