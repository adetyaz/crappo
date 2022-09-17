import Navigation from '@components/Navigation'
import Logo from '@icons/Logo'
import gsap from 'gsap'
import { useEffect } from 'react'

const Header = () => {
	useEffect(() => {
		gsap.from('.logo-wrapper', {
			opacity: 0,
			y: 200,
		})
	}, [])

	return (
		<header className='header'>
			<div className='logo-wrapper'>
				<Logo className='logo' />
				<h3>Crappo</h3>
			</div>
			<Navigation />
		</header>
	)
}

export default Header
