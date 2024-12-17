import Part from './Part.jsx'

const Content = (props) => {
	return (
		<>
			<Part title={props.parts[0]} exercice_amount={props.exercices[0]}/>
			<Part title={props.parts[1]} exercice_amount={props.exercices[1]}/>
			<Part title={props.parts[2]} exercice_amount={props.exercices[2]}/>
		</>
	)
}

export default Content