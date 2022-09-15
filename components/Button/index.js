import ArrowrightIcon from '@icons/ArrowrightOutlineIcon'
import React from 'react'

const Button = React.forwardRef(
	({ icon, children, className, ...props }, ref) => {
		return (
			<button className={`btn ${className}`} {...props} ref={ref}>
				{children}
				{icon && <ArrowrightIcon className='btn__icon' />}
			</button>
		)
	}
)

export default Button
