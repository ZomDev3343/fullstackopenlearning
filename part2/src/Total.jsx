const Total = ({course}) => {
	return (
		<div>
			<strong>total of {course.parts.map(part => part.exercises).reduce((a, b) => a + b, 0)} exercises</strong>
		</div>
	)
}

export default Total