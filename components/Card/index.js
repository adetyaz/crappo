import React, { useState } from 'react'
import ArrowrightOutlineIcon from '@icons/ArrowrightOutlineIcon'
import Button from '@components/Button'

const Card = React.forwardRef(({ logo, title, sub, text }, ref) => {
	const [hoverState, setHoverState] = useState(false)
	const enterHoverState = () => setHoverState(!hoverState)
	const leaveHoverState = () => setHoverState(!hoverState)

	return (
		<div
			className='card'
			onMouseEnter={enterHoverState}
			onMouseLeave={leaveHoverState}
			ref={ref}
		>
			{logo}

			<h3 className={hoverState ? '' : 'alternate'}>
				{title}
				<span>{sub}</span>
			</h3>
			<p className={hoverState ? '' : 'alternate'}>{text}</p>

			{hoverState ? (
				<Button icon>Start mining</Button>
			) : (
				<ArrowrightOutlineIcon className='card__icon' />
			)}
		</div>
	)
})

export default Card
