const Total = (props) => {
	return (
		<div>
		    <p>Number of exercises {props.exercices.reduce((a, b) => a + b, 0)}</p>
		</div>
	)
}

export default Total