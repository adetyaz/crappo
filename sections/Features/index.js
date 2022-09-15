import Button from '@components/Button'
import BarChart from '@components/Chart'
import Table from '@components/Table'
import CircleShape from '@icons/CircleShape'
import QuatercircleShape from '@icons/QuatercircleShape'

const Features = () => {
	return (
		<section className='features'>
			<CircleShape className='features__floating-circle' />
			<div className='features__header-text'>
				<h2>Market sentiments, portfolio, and run</h2>
				<h2>the infrastructure of your choice</h2>
			</div>

			<div className='features__content'>
				<div>
					<h3>Invest Smart</h3>
					<p>
						Get full statistic information about the behaviour of buyers and
						sellers will help you to make the decision.
					</p>
					<Button>Learn More</Button>
				</div>
				<BarChart />
			</div>
			<div className='features__content alternate'>
				<img
					src='/statistic.png'
					alt='statistics'
					className='features__statistics-image'
				/>

				<div>
					<h3>Detailed Statistics</h3>
					<p>
						View all mining related information in realtime, at any point at any
						location and decide which polls you want to mine in.
					</p>
					<Button>Learn More</Button>
				</div>
			</div>
			<div className='features__content'>
				<div>
					<h3>Grow your profit and track your investments</h3>
					<p>
						Use advanced analytical tools. Clear TradingView charts let you
						track current and historical profit investments.
					</p>
					<Button>Learn More</Button>
				</div>
				<Table />
			</div>
			<QuatercircleShape className='features__quater-circle' />
		</section>
	)
}

export default Features
