import Part from './Part.jsx'

const Content = (props) => {
	return (
		<>
			<Part title={props.course.parts[0].name} exercice_amount={props.course.parts[0].exercises}/>
			<Part title={props.course.parts[1].name} exercice_amount={props.course.parts[1].exercises}/>
			<Part title={props.course.parts[2].name} exercice_amount={props.course.parts[2].exercises}/>
		</>
	)
}

export default Content