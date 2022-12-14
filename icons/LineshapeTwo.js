import React from 'react'

const LineshapeTwo = React.forwardRef(({ className }, ref) => {
	return (
		<svg
			width='730'
			height='461'
			viewBox='0 0 730 461'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			ref={ref}
		>
			<rect
				x='60'
				y='602.864'
				width='120'
				height='997.881'
				transform='rotate(-120 60 602.864)'
				fill='url(#paint0_linear_1_518)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_1_518'
					x1='120'
					y1='949.623'
					x2='120'
					y2='1600.74'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='white' stop-opacity='0.04' />
					<stop offset='1' stop-color='white' stop-opacity='0.01' />
				</linearGradient>
			</defs>
		</svg>
	)
})

export default LineshapeTwo
