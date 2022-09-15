const InputField = ({ placeholder, className }) => {
	return (
		<input
			type='text'
			placeholder={placeholder}
			className={`text-input ${className}`}
		/>
	)
}

export default InputField
