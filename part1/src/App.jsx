import { useState } from "react"
import Feedback from "./Feedback.jsx"
import Statistics from "./Statistics.jsx"

function App() {

	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const incrementGood = () => setGood(good + 1);
	const incrementNeutral = () => setNeutral(neutral + 1);
	const incrementBad = () => setBad(bad + 1);

	return (
		<div>
			<Feedback goodClick={incrementGood} neutralClick={incrementNeutral} badClick={incrementBad}/>
			<Statistics good={good} neutral={neutral} bad={bad}/>
		</div>
	)
}

export default App
