import React from 'react'

const LineshapeOne = React.forwardRef(({ className }, ref) => {
	return (
		<svg
			width='928'
			height='606'
			viewBox='0 0 928 606'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			ref={ref}
		>
			<rect
				x='60'
				y='605.863'
				width='120'
				height='1002.26'
				transform='rotate(-120 60 605.863)'
				fill='url(#paint0_linear_1_1289)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_1_1289'
					x1='132.423'
					y1='610.168'
					x2='119.891'
					y2='1608.12'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='white' stopOpacity='0' />
					<stop offset='0.387874' stopColor='white' stopOpacity='0.04' />
					<stop offset='1' stop-color='white' stopOpacity='0' />
				</linearGradient>
			</defs>
		</svg>
	)
})

export default LineshapeOne
