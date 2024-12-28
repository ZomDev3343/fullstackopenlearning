const Total = (props) => {
	const exercises = [
		props.course.parts[0].exercises,
		props.course.parts[1].exercises,
		props.course.parts[2].exercises
	]
	return (
		<div>
		    <p>Number of exercises {exercises.reduce((a, b) => a + b, 0)}</p>
		</div>
	)
}

export default Total