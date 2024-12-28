import Part from './Part.jsx'

const Content = (props) => {
	return (
		<>
			{props.course.parts.map(part => <Part key={part.id} title={part.name} exercice_amount={part.exercises}/>)}
		</>
	)
}

export default Content