const Statistics = (props) => {

	if (props.total > 0)
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
	else
		return (
			<>
				<h1>Statistics</h1>
				<p>No feedback given</p>
			</>
		)
}

export default Statistics