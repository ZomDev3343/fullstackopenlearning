const Statistics = (props) => {

	return (
		<>
			<h1>Statistics</h1>
			<p>Good {props.good}</p>
			<p>Neutral {props.neutral}</p>
			<p>Bad {props.bad}</p>
			<p>Total {props.total}</p>
			<p>Average {props.avg}</p>
			<p>Positive ratio {props.positiveRatio}</p>
		</>
	)
}

export default Statistics