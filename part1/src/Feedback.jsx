const Button = (props) => {
	return (
		<button onClick={props.onClick}>{props.title}</button>
	);
}

const Feedback = (props) => {

	return (
		<>
			<h1>Give Feedback</h1>
			<Button title="Good" onClick={props.goodClick}/>
			<Button title="Neutral" onClick={props.neutralClick}/>
			<Button title="Bad" onClick={props.badClick}/>
		</>
	);
}

export default Feedback