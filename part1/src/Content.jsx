import Part from './Part.jsx'

const Content = (props) => {
	return (
		<>
			<Part title={props.parts[0].name} exercice_amount={props.parts[0].exercises}/>
			<Part title={props.parts[1].name} exercice_amount={props.parts[1].exercises}/>
			<Part title={props.parts[2].name} exercice_amount={props.parts[2].exercises}/>
		</>
	)
}

export default Content