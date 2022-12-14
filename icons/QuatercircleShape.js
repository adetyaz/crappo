const QuatercircleShape = ({ className }) => {
	return (
		<svg
			width='320'
			height='336'
			viewBox='0 0 320 336'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<circle
				cx='344'
				cy='344'
				r='343'
				transform='rotate(-120 344 344)'
				fill='#ffffff1a'
			/>
			<defs>
				<radialGradient
					id='paint0_angular_1_130'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(344 344) rotate(90) scale(343)'
				>
					<stop stop-color='white' stop-opacity='0.1' />
					<stop offset='1' stop-color='white' stop-opacity='0' />
				</radialGradient>
			</defs>
		</svg>
	)
}

export default QuatercircleShape
