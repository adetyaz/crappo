const EthereumLogo = ({ className }) => {
	return (
		<svg
			width='80'
			height='80'
			viewBox='0 0 80 80'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<circle cx='40' cy='40' r='40' fill='#1181E8' />
			<g clip-path='url(#clip0_1_116)'>
				<path
					d='M39.89 51.9385L25.1555 43.243L39.881 64.0015L54.623 43.243L39.881 51.9385H39.89ZM40.109 16L25.3805 40.4455L40.109 49.156L54.8435 40.4545L40.109 16Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1_116'>
					<rect
						width='48'
						height='48'
						fill='white'
						transform='translate(16 16)'
					/>
				</clipPath>
			</defs>
		</svg>
	)
}

export default EthereumLogo
