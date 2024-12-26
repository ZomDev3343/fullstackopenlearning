const StatisticsLine = (props) => {
	return (
		<>
			<tr>
				<td>{props.title}</td>
				<td>{props.value}</td>
			</tr>
		</>
	)
}

const Statistics = (props) => {

	if (props.total > 0)
		return (
			<>
				<h1>Statistics</h1>
				<table>
					<tbody>
						<StatisticsLine title="Good" value={props.good}/>
						<StatisticsLine title="Neutral" value={props.neutral}/>
						<StatisticsLine title="Bad" value={props.bad}/>
						<StatisticsLine title="Total" value={props.total}/>
						<StatisticsLine title="Average" value={props.avg}/>
						<StatisticsLine title="Positive Ratio" value={props.positiveRatio}/>
					</tbody>
				</table>
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